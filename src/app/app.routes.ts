import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const routes: Routes = [
    
    { path: 'dashboard', component: DashboardComponent} ,
    { path: 'login', component: LoginComponent},
    { path: 'review', component: ReviewComponent},
    { path: 'error', component: ErrorComponent } ,
    { path: 'checkout', component: CheckoutComponent } ,
    { path: 'thankyou', component: ThankyouComponent } ,
];
