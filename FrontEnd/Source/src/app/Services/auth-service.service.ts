import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private route:Router,private router:ActivatedRoute, private loginService:LoginServiceService) { }
  status:boolean = false
  token!:any
  tokenInfo!:any
  userData:any = localStorage.getItem('userData');
  login(){
    this.loginService.verifyOtp(localStorage.getItem('userData')).subscribe((p:any)=>{
      console.log(p);
      
      this.token = p.body.token;
      //generate token
      localStorage.setItem('TokenInfo', JSON.stringify(p.body))})
      let objToken = localStorage.getItem('TokenInfo');

        if(typeof objToken == 'string'){
          this.tokenInfo = JSON.parse(objToken);
        }
        //decode jwttoken
        let jwtData = this.tokenInfo.token.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        console.log(decodedJwtData.role);
        console.log(decodedJwtData.unique_name);
        return decodedJwtData;
  }
  


  logOut(){
    localStorage.removeItem('TokenInfo');
    localStorage.removeItem('userData');
    localStorage.removeItem('products');
  }

  isLoggedIn():boolean{
    // this.token = localStorage.getItem('TokenInfo')
    let jwtTokenDecoded = this.login();
    
    if(jwtTokenDecoded.role === 'admin')
      {
        this.status = true;
      }
      else
      {
        this.status = false;
      }
      return this.status;
    }
}
