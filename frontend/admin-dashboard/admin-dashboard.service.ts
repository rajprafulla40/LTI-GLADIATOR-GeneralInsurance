import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApproveClaim } from '../entity/approveClaim';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

constructor(private http: HttpClient) { }

updateStatus(data: ApproveClaim){
  return this.http.post('http://localhost:8586/updateClaimStatus', data);
}

fetchClaimData(status: String){
 return this.http.get('http://localhost:8586/getByClaimStatus/'+status);
}

fetchCustomerCount(){
  return this.http.get('http://localhost:8586/getCustomerCount');
}

fetchClaimCount(){
  return this.http.get('http://localhost:8586/getClaimCount');
}

fetchPolicyCount(){
  return this.http.get('http://localhost:8586/getPolicyCount');
}

fetchRenewCount(){
  return this.http.get('http://localhost:8586/getRenewCount');
}

}
