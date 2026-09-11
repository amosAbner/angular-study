import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CustomerService } from '../service/customers';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';
import { DeleteConfirmDialog } from './delete-confirm-dialog';

@Component({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    CommonModule
  ],
  selector: 'app-consult',
  styleUrl: './consult.scss',
  templateUrl: './consult.html',
})
export class Consult implements OnInit {

  name: string = '';
  listCustomer: Customer[] = [];
  columnsTable: string[] = ['id', 'name', 'document', 'birthday', 'email', 'actions'];

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.listCustomer = this.customerService.listCustormer(this.name);
    this.cdr.detectChanges();
  }

  search() {
    this.refreshList();
  }

  editCustomer(id: string) {
    this.router.navigate(['/register', id]);
  }

  delete(id: string) {
    const dialogRef = this.dialog.open(DeleteConfirmDialog, {
      width: '420px',
      disableClose: true,
      panelClass: 'delete-confirm-dialog-panel'
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }

      const wasDeleted = this.customerService.delete(id);

      if (wasDeleted) {
        this.refreshList();
      }
    });
  }

}
