import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  ngOnInit(): void {
  }
  
  loginForm !: FormGroup;
  constructor(private fb: FormBuilder) {
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

  
}
