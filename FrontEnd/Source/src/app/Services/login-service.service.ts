import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  // hostUrl = "https://localhost:44346/api/Login"
  hostUrl = environment.apiUrl + 'Login'
  // httpOptions = {
    headers= new HttpHeaders({
      'Content-type': 'application/json',

    })
  // }
  LoginUser(user:any){
    return this.http.post<any>(`${this.hostUrl}`,user, {headers:this.headers, observe:"response" });
  }

  verifyOtp(user:any){
    return this.http.post<any>(`${this.hostUrl}/otpVerify`,user, {headers: this.headers, observe: "response"});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('TokenInfo');
    }

  
  
}
