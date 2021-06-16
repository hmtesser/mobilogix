import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { encode } from 'punycode';




@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  private initCall: string = 'https://iter-api.itertelemetria.com';

  private rest_Login: String = '/v1/sign_in';

  constructor(private http: HttpClient) {}

  public getToken(email, password): Promise<any> {
    const options = {
      headers: new HttpHeaders({
        Authorization: `Basic ${btoa(`${email}:${password}`)}`,
      }),
    };

    return new Promise((resolve, reject) => {
      this.http.get(`${this.initCall}${this.rest_Login}`, options).subscribe(
        (data) => resolve(data),
        (error) => reject(error)
      );
    });
  }
}
