import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {


  private initCall:string = 'https://iter-api.itertelemetria.com'; 

  private rest_Login:any = this.initCall`${'/v1/sign_in'}`


  constructor(private httpClient: HttpClient) { }

  public SendGetRequest() {
    return this.httpClient.get(this.rest_Login)
  
  }


}
