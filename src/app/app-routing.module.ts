import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { SecureInnerPagesGuard } from './guard/secure-inner-pages.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from "./ticket/ticket.component";
import { PaymentComponent } from './payment/payment.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  
    { path: "", component: UserComponent},
    { path: "login", component: LoginComponent},
    { path: "signup", component: RegisterComponent},
    { path: "ticket", component: TicketComponent},
    { path: "user", component: UserComponent},
    { path: "payment", component: PaymentComponent},
    { path: "message", component: MessageComponent}
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }