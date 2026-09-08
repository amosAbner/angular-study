import { Service } from '@angular/core';
import { Customer } from '../model/customer';

@Service()
export class CustomerService {

    static REPO_CUSTOMERS = '_CUSTOMERS';

    save(customer: Customer) {
        const customers = this.obterStorage();
        customers.push(customer);
        
        localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers));
    }

    listCustormer(name: string): Customer[] {
        const customers = this.obterStorage();
        
        if (!customers) {
            return customers;
        }

        return customers.filter(customer => 
            customer.name?.toLowerCase().includes(name.toLowerCase()));
    }

    private obterStorage(): Customer[] {
        const repositoryCustomers = localStorage.getItem(CustomerService.REPO_CUSTOMERS);

        if (repositoryCustomers) {
            const customers: Customer[] = JSON.parse(repositoryCustomers);
            return customers;
        }

        const customers: Customer[] = [];
        localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers));
        return customers;
    }
}
