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

    update(customer: Customer) {
        const customers = this.obterStorage();
        const index = customers.findIndex(c => c.id === customer.id);

        if (index !== -1) {
            customers[index] = customer;
            localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers));
        }
    }

    findCustomerById(id: string): Customer | undefined {
        const customers = this.obterStorage();
        return customers.find(c => c.id === id);
    }

    listCustormer(name: string): Customer[] {
        const customers = this.obterStorage();
        
        if (!customers) {
            return customers;
        }

        return customers.filter(customer => 
            customer.name?.toLowerCase().includes(name.toLowerCase()));
    }

    delete(id: string | undefined): boolean {
        if (!id) {
            return false;
        }

        const customers = this.obterStorage();
        const index = customers.findIndex(c => c.id === id);

        if (index === -1) {
            return false;
        }

        customers.splice(index, 1);
        localStorage.setItem(CustomerService.REPO_CUSTOMERS, JSON.stringify(customers));
        return true;
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
