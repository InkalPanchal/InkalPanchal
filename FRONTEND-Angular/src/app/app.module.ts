import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
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
import { ProductsComponent } from './products/products.component';
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

@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DataTablesModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CategoryComponent,
    OtpComponent,
    FooterComponent,
    ProductsComponent,
    AdminComponent,
    CategoriesComponent,
    BodyComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminBodyComponent,
    CardsComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductModalComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
