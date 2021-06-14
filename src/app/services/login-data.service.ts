import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {


  private initCall:any = 'https://iter-api.itertelemetria.com'; 

  private rest_Login:any = '/v1/sign_in';


  constructor(private httpClient: HttpClient) { }

  public SendGetRequest() {
    return this.httpClient.get(this.rest_Login)
  
  }


}
