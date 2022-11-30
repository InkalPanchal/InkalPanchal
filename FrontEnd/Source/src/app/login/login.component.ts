import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ErrorHandlerServiceService } from '../Services/error-handler-service.service';
import { LoginServiceService } from '../Services/login-service.service';
// import Swal from 'sweetalert2';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userMobNo!:any
  ngOnInit(): void {
    this.router.paramMap.subscribe((p:ParamMap)=>{
      if(p.get('mobNo')){
        this.userMobNo = p.get('mobNo');
        this.loginForm.patchValue({phoneNumber: this.userMobNo});
      }
    })
  }
  
  
  errorHandler!:ErrorHandlerServiceService
  loginService!: LoginServiceService
  pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  
  
  loginForm !: FormGroup;
  constructor(private injector: Injector, @Inject(MAT_DIALOG_DATA) public anyVariable:any, private fb: FormBuilder,private matDialog: MatDialog, private _mdr:MatDialogRef<LoginComponent>, private route:Router, private router:ActivatedRoute) {
    
    this.loginService = this.injector.get<LoginServiceService>(LoginServiceService);
    this.errorHandler = this.injector.get<ErrorHandlerServiceService>(ErrorHandlerServiceService);

    this.loginForm = this.fb.group({
      // userName:[''],
      phoneNumber:['',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.pattern)])],
      // password:[,Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
    })
   }
   user!:any;

  get getPhone(){
    return this.loginForm.get('phoneNumber') as FormControl;
  }

  onSubmit(){
    console.log(this.loginForm.value);
    
  }

  users!:any
  // async otp(mobNo:any){
  //   this.user = this.loginForm.value;
  //   this.loginService.LoginUser(this.user).subscribe((p:any)=>{
      
  //     this.users = p;
  //     // console.log(p);
  //     //generate user object 
  //     localStorage.setItem("userData", JSON.stringify(this.users));
  //     let obj1 = localStorage.getItem('userData');
  //     if(typeof obj1 == 'string'){
  //       var obj = JSON.parse(obj1) ;
  //     }
  //     alert("Your otp is:" + obj.otp);
  //   })
  //   this.route.navigate(['otp', mobNo], {relativeTo: this.router});
  // }
errorMessage:string = ""
  // otp(mobNo:any){

  //     this.user = this.loginForm.value;
  //     this.loginService.LoginUser(this.user).subscribe(
  //       {
  //       next: (p:any)=>{
  //         debugger
        
  //         this.users = p.body;
  //         // console.log(p);
  //         //generate user object 
  //         localStorage.setItem("userData", JSON.stringify(this.users));
  //         let obj1 = localStorage.getItem('userData');
  //         if(typeof obj1 == 'string'){
  //           var obj = JSON.parse(obj1) ;
  //         }
  //         alert("Your otp is:" + obj.otp);
  //         this.route.navigate(['/login/otp', mobNo], {relativeTo: this.router});
  //       },
  //       error: (err: HttpErrorResponse)=>{
  //         debugger
  //         this.errorHandler.handleError(err);
  //         this.errorMessage = this.errorHandler.errorMsg; 
          
  //         this.route.navigate(['../signUp', mobNo], {relativeTo: this.router})
  //         .then(()=>{
  //           this.CloseDialog(); //close the login dialog box
  //           this.openModal();
  //         });
  //       }
  //     }
  //     )
      
  //   }

   otp(mobNo:any){

      this.user = this.loginForm.value;
      this.loginService.LoginUser(this.user).subscribe(
        {
        next: (p:any)=>{
          debugger
        
          this.users = p.body;
          // console.log(p);
          //generate user object 
          localStorage.setItem("userData", JSON.stringify(this.users));
          let obj1 = localStorage.getItem('userData');
          if(typeof obj1 == 'string'){
            var obj = JSON.parse(obj1) ;
          }
          alert("Your otp is:" + obj.otp);
          this.route.navigate(['/login/otp', mobNo], {relativeTo: this.router});
        },
        error: (err: HttpErrorResponse)=>{
          debugger
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMsg; 
          
          this.route.navigate(['../signUp', mobNo], {relativeTo: this.router})
          .then(()=>{
            this.CloseDialog(); //close the login dialog box
            this.openModal();
          });
        }
      }
      )
      
    }
  // alertConfirmation() {
  //   Swal.fire({
  //     title: "warning",
  //     text: this.errorMessage,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Ok, let me enter new credentials.',
  //     cancelButtonText: 'Cancel',
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire('Ok', 'You will be redirected to login page', 'success');
  //       this.route.navigate(['/login'], {relativeTo: this.router});
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire('Cancelled', 'Ok then continue with guest user..', 'error');
  //       this._mdr.close(false);
  //     }
  //   });
  // }

  openModal(){
    // this.matDialogRef = 
    this.matDialog.open(SignUpComponent, {
      "autoFocus": false
    });
  }

  CloseDialog(){
    this._mdr.close(false);
  }
  
}
