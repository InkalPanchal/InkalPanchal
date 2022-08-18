import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: '', redirectTo: 'header', pathMatch: 'full'},
  // {path: 'header', component:HeaderComponent, children:[{ path:'login', component:LoginComponent }]}

    
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
