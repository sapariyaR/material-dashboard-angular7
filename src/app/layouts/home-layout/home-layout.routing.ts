import { RegisterComponent } from './../../register/register.component';
import { LoginComponent } from './../../login/login.component';
import { Routes } from '@angular/router';

export const HomeLayoutRoutes: Routes = [
    { path: 'home/login',      component: LoginComponent },
    { path: 'home/register',      component: RegisterComponent },
];
