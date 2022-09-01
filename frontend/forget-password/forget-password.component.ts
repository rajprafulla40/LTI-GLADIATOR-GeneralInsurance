import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email:string
  
  constructor(private router : Router, private service:ForgotPasswordService) { }

  ngOnInit(): void {
  }

  goToOtp(){
    this.service.sendOtp(this.email).subscribe(dataDto =>{
      let data:any;
      data = dataDto
      sessionStorage.setItem('email', data.email)
      if(data.status == 'SUCCESS'){ 
        sessionStorage.setItem('forgotEmail', data.emailId)
        this.router.navigate(['otp']);
    }
    else{
      window.location.reload();
    }
  })
  }

}