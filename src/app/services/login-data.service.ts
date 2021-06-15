import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {


  private initCall:any = 'https://iter-api.itertelemetria.com'; 

  private rest_Login:any = '/v1/sign_in';


  constructor(private http: HttpClient) { }

  public getToken(password,email):Observable<any> {



    return this.http.get(`${this.initCall}${this.rest_Login}`)
  }
}
 


