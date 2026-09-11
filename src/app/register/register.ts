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
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxMaskDirective,
  ],
  selector: 'app-register',
  styleUrl: './register.scss',
  templateUrl: './register.html',
})
export class Register {

  customer: Customer = Customer.newCustomer();
  isUpdate: boolean = false;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.loadCustomer(id);
    });
  }

  loadCustomer(id: string | null) {
    if (id) {
      this.isUpdate = true;
      const customer = this.customerService.findCustomerById(id);
      this.customer = customer ? customer : Customer.newCustomer();
    } else {
      this.isUpdate = false;
      this.customer = Customer.newCustomer();
    }
  }

  save() {
    this.customerService.save(this.customer);
    this.clear();
  }

  update() {
    this.customerService.update(this.customer);
    this.router.navigate(['/consult']);
  }

  clear() {
    this.customer = Customer.newCustomer();
    this.isUpdate = false;
    this.router.navigateByUrl('/register');
  }
}
