import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorHandlerServiceService } from '../Services/error-handler-service.service';
import { SignUpService } from '../Services/sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pattern= /^(\+\d{1,3}[- ]?)?\d{10}$/;
  singUpForm!:FormGroup
  NewUserData!:any
  errorMessage:string = ''
  private matDialog!:MatDialog
  private signUpService:SignUpService
  private erroHandler: ErrorHandlerServiceService
  mobileNumber!:any
  constructor(private injector:Injector, private route:ActivatedRoute, private router:Router, @Inject(MAT_DIALOG_DATA) public anyVariable:any, private _mdr:MatDialogRef<SignUpComponent> , private fb: FormBuilder) {
    this.singUpForm = this.fb.group({
      UserName:['', Validators.compose( [Validators.required,Validators.minLength(6),Validators.maxLength(20)])],
      EmailAddress:['', Validators.compose([Validators.required, Validators.email])],
      Password:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      PhoneNumber:  ['', Validators.compose([Validators.required, Validators.pattern(this.pattern), Validators.min(10), Validators.max(10)])],
      DateOfBirth: ['', Validators.required]
    });

    this.matDialog = this.injector.get<MatDialog>(MatDialog);
    this.signUpService = this.injector.get<SignUpService>(SignUpService);
    this.erroHandler = this.injector.get<ErrorHandlerServiceService>(ErrorHandlerServiceService);
  }

  ngOnInit(): void {
    this.route.params.subscribe((phNo:any)=>{
      if(phNo['mobNo']){
        this.mobileNumber = phNo['mobNo'];
        this.singUpForm.patchValue({PhoneNumber: this.mobileNumber});
  }})
  }

  get getUsername(){
    return this.singUpForm.get('UserName') as FormControl;
  }
  get Email(){
    return this.singUpForm.get('EmailAddress') as FormControl;
  }
  get Password(){
    return this.singUpForm.get('Password') as FormControl;
  }
  get phone(){
    return this.singUpForm.get('PhoneNumber') as FormControl;
  }
  get DOB(){
    return this.singUpForm.get('DateOfBirth') as FormControl;
  }
  onSubmit(){
    console.log(this.singUpForm.value);
  }

  SignUp(){
    this.NewUserData = this.singUpForm.value;
    this.signUpService.SignUpUser(this.NewUserData).subscribe({
      next: (u:any)=>{
        this.NewUserData = u.body;
        console.log(u.body);
        
        this.closeModal(); //close modal og signup 
        this.router.navigate(['/login', this.NewUserData.phoneNumber], {relativeTo: this.route}).then(()=>{
        })
        this.matDialog.open(LoginComponent, {
          "autoFocus": false
        });
      },
      error: (err: HttpErrorResponse)=>{
        this.erroHandler.handleError(err);
        this.errorMessage = this.erroHandler.errorMsg;
      }
    })
  }
  closeModal(){
    this._mdr.close();
  }
}
