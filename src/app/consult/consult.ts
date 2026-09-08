import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CustomerService } from '../service/customers';
import { Customer } from '../model/customer';

@Component({
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    CommonModule
  ],
  selector: 'app-consult',
  styleUrl: './consult.scss',
  templateUrl: './consult.html',
})
export class Consult implements OnInit {

  name: string = '';
  listCustomer: Customer[] = [];
  columnsTable: string[] = ['id', 'name', 'document', 'birthday', 'email'];

  constructor(private customerService: CustomerService) {
    this.listCustomer = this.customerService.listCustormer(this.name);
  }

  ngOnInit() {
    this.listCustomer = this.customerService.listCustormer(this.name);
  }

  search() {
    this.listCustomer = this.customerService.listCustormer(this.name);
  }

}
