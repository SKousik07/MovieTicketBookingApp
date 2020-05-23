import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,MatIconModule, MatSidenavModule, MatButtonModule,MatListModule,MatFormFieldModule,MatOptionModule,MatSelectModule, MatTooltipModule, MatNativeDateModule} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {AngularFireAuthModule  } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './service/auth.service'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CardsModule, TooltipModule} from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { FilterByPipe } from './filter.pipe';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { SafePipe } from './safe.pipe';
import { PaymentComponent } from './payment/payment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
    RegisterComponent,
    UserComponent,
    FooterComponent,
    SliderComponent,
    FilterByPipe,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    TicketComponent,
    SafePipe,
    PaymentComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatFormFieldModule,
    MatOptionModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    CardsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    WavesModule,
    ButtonsModule,
    IconsModule,
    TooltipModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
    
    
    
    


  ],
  providers: [AuthService,MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule { }
