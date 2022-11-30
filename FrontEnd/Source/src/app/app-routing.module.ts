
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './admin/admin-body/brand/brand.component';
import { CategoryListComponent } from './admin/admin-body/category-list/category-list.component';
import { ProductListComponent } from './admin/admin-body/product-list/product-list.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ProductModalComponent } from './admin/product-modal/product-modal.component';
import { AllproductsComponent } from './body/allproducts/allproducts.component';
import { BodyComponent } from './body/body.component';
import { CategoryWiseProductComponent } from './body/category-wise-product/category-wise-product.component';
import { SpecificProductComponent } from './body/specific-product/specific-product.component';
import { UserOrdersComponent } from './body/user/user-orders/user-orders.component';
import { UserComponent } from './body/user/user.component';
import { InternalServerErrorComponent } from './errorCOmponent/internal-server-error/internal-server-error.component';
import { NotFoundErrorComponent } from './errorCOmponent/not-found-error/not-found-error.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from './Services/auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:BodyComponent, pathMatch: 'full'},
  {path:'header/:userName', component:HeaderComponent},
  {path: 'categoryWistListing/:id', component: CategoryWiseProductComponent},
  {path: 'allProducts', component: AllproductsComponent},
  {path: 'product/:productId', component: SpecificProductComponent},
  { path:'login', component:LoginComponent ,
    children: [
      {path: 'otp',component:OtpComponent},
      {path: 'otp/:mobNo',component:OtpComponent}
    ]
  },
  {path:'login/:mobNo', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent },
  { path: 'signUp/:mobNo', component: SignUpComponent },
  { path: 'admin/:userName', component:AdminComponent ,canActivate: [AuthGuard],
  
    children:[
      //modals
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
      {path: 'products', component: ProductModalComponent, canActivate: [AuthGuard]},

      //list
      {path: 'categoryList', component: CategoryListComponent, canActivate: [AuthGuard]},
      {path: 'productList', component: ProductListComponent, canActivate: [AuthGuard]},
      {path:'brand', component:BrandComponent, canActivate: [AuthGuard]}
    ]}, 
    {path:'admin/:userName', component:AdminComponent
  },
  {path: 'user', component:UserComponent, children: [
    {path: 'userOrders', component: UserOrdersComponent}
  ]},
  {path: "404", component: NotFoundErrorComponent},
  {path:"500", component: InternalServerErrorComponent}
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    
  ]
 
})
export class AppRoutingModule { }
