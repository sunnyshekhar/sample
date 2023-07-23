import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string = "http://localhost:8080/demo/";
 
  constructor(private http: HttpClient) {
  }
 

  callBackend(data: Data):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(data);
    console.log("Sending...");
    return this.http.post(this.baseURL+'angular',body,{'headers':headers});

  }

 
}
 