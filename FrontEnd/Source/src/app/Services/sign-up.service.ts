import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  hostUrl = environment.apiUrl + "SignUp";
  headers = new HttpHeaders ({
    'Content-type':'application/json'
  })
  constructor(private http: HttpClient) { }

  SignUpUser(User:any){
    return this.http.post<any>(`${this.hostUrl}`, User, {headers: this.headers, observe: "response"});
  }
}
