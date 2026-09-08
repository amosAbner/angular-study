import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customers';

@Component({
  imports: [
    FlexLayoutModule, 
    MatCardModule, 
    FormsModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {

  customer: Customer = Customer.newCustomer();

  constructor(private customerService: CustomerService) {
  }

  save() {
    this.customerService.save(this.customer);
    this.clear();
  }

  clear() {
    this.customer = Customer.newCustomer();
  }
}
