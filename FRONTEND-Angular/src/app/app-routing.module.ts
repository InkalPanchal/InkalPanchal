import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './admin/admin-body/category-list/category-list.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  {path:'', component:BodyComponent, pathMatch: 'full'},
  { path:'login', component:LoginComponent ,
    children: [
      {path: 'otp',component:OtpComponent},
      {path: 'otp/:mobNo',component:OtpComponent}
    ]
  },
 
  { path: 'admin', component:AdminComponent, 
    children:[
      {path: 'categories', component: CategoriesComponent},
      {path: 'categoryList', component: CategoryListComponent}
    ]}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
