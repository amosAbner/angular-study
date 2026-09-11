import { Routes } from '@angular/router';
import { Consult } from './consult/consult';
import { Register } from './register/register';

export const routes: Routes = [
    { path: 'register/:id', component: Register },
    { path: 'register', component: Register },
    { path: 'consult', component: Consult }
];
