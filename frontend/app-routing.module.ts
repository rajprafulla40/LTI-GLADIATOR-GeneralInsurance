import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AvailablePlansComponent } from './available-plans/available-plans.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimStatusComponent } from './claim-status/claim-status.component';
import { ClaimComponent } from './claim/claim.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { ContactComponent } from './contact/contact.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { PaymentComponent } from './payment/payment.component';
import { PlansComponent } from './plans/plans.component';
import { RegistrationComponent } from './registration/registration.component';
import { RenewComponent } from './renew/renew.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path: 'renew', component: RenewComponent},
  {path: 'plans', component: PlansComponent},
  {path: 'buyInsurance', component: BuyInsuranceComponent},
  {path: 'claimInsurance', component: ClaimComponent},
  {path: 'estimate', component: EstimateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'userDashboard', component: UserDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'congratulations', component: CongratulationsComponent },
  { path: 'claimStatus', component: ClaimStatusComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'otp', component: OtpComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'about', component: AboutComponent },
  { path: 'availablePlans', component: AvailablePlansComponent },
  { path: 'resetPassword', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
