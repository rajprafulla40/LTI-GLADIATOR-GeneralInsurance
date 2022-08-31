import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudeService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/posts';
  List(){
    return this.http.get(`${this.url}`);
  }

  create(data : any):Observable<any>{
    return this.http.post(`${this.url}`,data);
  }
}
