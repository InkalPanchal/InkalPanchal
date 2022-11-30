import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, CanActivate, Router, } from '@angular/router';
import { OtpComponent } from '../otp/otp.component';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthServiceService, private route: ActivatedRoute, private router:Router){ }

  userName!:any
  canActivate(): boolean  {
  if(this.authService.isLoggedIn() === true) {
    let userData = localStorage.getItem('userData')
    if(typeof userData == 'string') {
      let obj = JSON.parse(userData)
      this.userName = obj.userName;
    }
    this.router.navigate(['/admin', this.userName], {relativeTo: this.route});
    return true;
  }
  else {
    this.router.navigate(['/'], {relativeTo: this.route});
    return false;
  }
}
}
