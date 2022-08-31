import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { RenewComponent } from './renew/renew.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { CongratulationsComponent } from './congratulations/congratulations.component';

import { EstimateComponent } from './estimate/estimate.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { PlansComponent } from './plans/plans.component';
import { HomeComponent } from './home/home.component';
import { ModelComponent } from './model/model.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EntityComponent } from './entity/entity.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpComponent } from './otp/otp.component';
import { AboutComponent } from './about/about.component';
import { AvailablePlansComponent } from './available-plans/available-plans.component';
import { ClaimComponent } from './claim/claim.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    RenewComponent,
    LoginComponent,
    RegistrationComponent,
    CongratulationsComponent,
    EstimateComponent,
    LogoutComponent,
    NavigatorComponent,
    PlansComponent,
    HomeComponent,
    ModelComponent,
    UserDashboardComponent,
    EntityComponent,
    PaymentComponent,
    AdminDashboardComponent,
    ClaimStatusComponent,
    ContactComponent,
    ForgetPasswordComponent,
    OtpComponent,
    AboutComponent,
    AvailablePlansComponent,
    ResetPasswordComponent,
    ClaimComponent,
    BuyInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
