import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  ngOnInit(): void {
  }
  
  

  loginForm !: FormGroup;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public anyVariable:any, private _mdr:MatDialogRef<LoginComponent> , private route: Router, private router:ActivatedRoute) {
    this.loginForm = this.fb.group({
      data:[]
    })
   }

  get getData(){
    return this.loginForm.get("data") as FormControl;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    
  }

  otp(mobNo:any){
    this.route.navigate(['otp', mobNo], {relativeTo: this.router});
  }
  CloseDialog(){
    this._mdr.close(false);
  }
  
}
