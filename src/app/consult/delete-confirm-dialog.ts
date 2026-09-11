import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-confirm-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-confirm-dialog.html',
  styleUrl: './delete-confirm-dialog.scss',
})
export class DeleteConfirmDialog {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmDialog>) {}

  cancel() {
    this.dialogRef.close(false);
  }

  confirm() {
    this.dialogRef.close(true);
  }
}
