import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../Models/User';
import { AuthServiceService } from '../Services/auth-service.service';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css', './otp.css']
})
export class OtpComponent implements OnInit {
  // @Input() users!:any
  mobileNo!:number;
  otpForm!:FormGroup
  constructor(private authService:AuthServiceService, private router: ActivatedRoute,private route:Router, private _mdr:MatDialogRef<OtpComponent>, private fb: FormBuilder, private loginService: LoginServiceService) 
  {
    this.otpForm = this.fb.group({
      Otp:['']
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(p => 
      this.mobileNo = p['mobNo'] 
    )
  }

  get getOtp(){
    return this.otpForm.get('Otp') as FormControl;
  }
userName!:any
  async submitOtp(){

      if(await this.authService.isLoggedIn()){
        let userData = localStorage.getItem('userData')
        if(typeof userData == 'string'){
          let obj = JSON.parse(userData)
          this.userName = obj.userName;
        }
        alert("You logged in as admin.");
        this.route.navigate(['/admin', this.userName], {relativeTo: this.router});
        this.CloseDialog();

      }else{
        alert("You logged in as user.");
        this.route.navigate([''],{relativeTo: this.router});
        this.CloseDialog();
      }
  }

  
  CloseDialog(){
    this._mdr.close(false);
  }

}
