import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  // {path: '', redirectTo: 'header', pathMatch: 'full'},
  {path: 'header', component:HeaderComponent, 
    children:[
      { 
        path:'login', 
        component:LoginComponent ,
        children: [
          {
            path: 'otp',
            component:OtpComponent
          },
          {
            path: 'otp/:id',
            component:OtpComponent
          }
        ]
      }
    ]
  }

    
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
