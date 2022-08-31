import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ResetPasswordService {

    constructor(private http: HttpClient) { }
    
    resetPassword(data){    
        const url='http://localhost:8586/resetPassword';
        const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post(url, data, {headers: headers});
    }

    }