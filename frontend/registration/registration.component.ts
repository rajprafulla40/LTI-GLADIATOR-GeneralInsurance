import { Component, OnInit } from '@angular/core';
import { RegisterationService } from './registration.service';
import { Router } from '@angular/router';
import { FormsModule, Validators, FormGroup } from '@angular/forms';
import { Customer } from '../model/customer';
import { DataDto } from '../login/data.dto';
@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
datadto: DataDto = new DataDto();
  customer: Customer = new Customer();
  successfull: boolean = false;
  constructor(
      private customerService: RegisterationService,
      private router: Router
  ) { }

  ngOnInit(): void {
    /* if time left
    this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          lastName: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
    */
  }

  register(){
    
   this.customerService.register(this.customer).subscribe(data =>{
      if (data.status == 'SUCCESS') {
        this.router.navigate(['login']);
      }
      else{
        //error show and re register
        alert(JSON.stringify(data));
        this.router.navigate(['register']);
      }
    })
  }
}
