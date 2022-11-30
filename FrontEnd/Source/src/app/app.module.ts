import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { OtpComponent } from './otp/otp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './body/products/products.component';
import { AdminComponent } from './admin/admin.component';
import { BodyComponent } from './body/body.component';
import { CategoryComponent } from "./body/category/category.component";
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { CardsComponent } from './admin/admin-body/cards/cards.component';
import { CategoriesComponent } from "./admin/categories/categories.component";
import { CategoryListComponent } from './admin/admin-body/category-list/category-list.component';
import { ProductListComponent } from './admin/admin-body/product-list/product-list.component';
import { ProductModalComponent } from './admin/product-modal/product-modal.component';
import { SubCategoryListComponent } from './admin/admin-body/sub-category-list/sub-category-list.component';
import { BrandComponent } from './admin/admin-body/brand/brand.component';
import { AllproductsComponent } from './body/allproducts/allproducts.component';
import { SpecificProductComponent } from './body/specific-product/specific-product.component';
import { SearchPipe } from "./search.pipe";
import { RouterModule } from "@angular/router";
import { ShoppingCartComponent } from './body/shopping-cart/shopping-cart.component';
import { UserOrdersComponent } from './body/user/user-orders/user-orders.component';
import { UserComponent } from './body/user/user.component';
import { InternalServerErrorComponent } from './errorCOmponent/internal-server-error/internal-server-error.component';
import { NotFoundErrorComponent } from './errorCOmponent/not-found-error/not-found-error.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { CategoryWiseProductComponent } from './body/category-wise-product/category-wise-product.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DataTablesModule,
    RouterModule,
    AutocompleteLibModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AllproductsComponent,
    OtpComponent,
    FooterComponent,
    AdminComponent,
    CategoriesComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBodyComponent,
    CardsComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductModalComponent,
    SubCategoryListComponent,
    BrandComponent,
    BodyComponent,
    ProductsComponent,
    SpecificProductComponent,
    CategoryComponent,
    SearchPipe,
    ShoppingCartComponent,
    UserOrdersComponent,
    UserComponent,
    InternalServerErrorComponent,
    NotFoundErrorComponent,
    SignUpComponent,
    CategoryWiseProductComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
