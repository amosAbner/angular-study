import { v4 as uuid } from 'uuid'

export class Customer {
    id?: string;
    name?: string;
    document?: string;
    birthday?: string
    email?:string

    static newCustomer() {
        const cliente = new Customer();
        cliente.id = uuid();
        return cliente;
    }
}