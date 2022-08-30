import { Component, OnInit } from '@angular/core';
import { ApproveClaim } from '../approve-claim';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claim:Claim = new Claim();
  approveClaim: ApproveClaim = new ApproveClaim();

  constructor(private service: ClaimService, private router: Router) { }

  claimInsurance(){
    this.service.claimInsurance(this.claimCustomerId(this.claim)).subscribe(data =>{
      alert(JSON.stringify(data));
    })

    this.router.navigate(['claimStatus']);
  }

  updateStatus(){
    this.service.updateStatus(this.approveClaimCustomerId(this.approveClaim)).subscribe(data =>{
      alert(JSON.stringify(data));
    })
  }

  claimCustomerId(claim:any){
    claim.customerId = sessionStorage.getItem('id');
    return claim;
  }

  approveClaimCustomerId(approveClaim:any){
    approveClaim.customerId = sessionStorage.getItem('id');
    return approveClaim;
  }

  ngOnInit(): void {
  }


}
