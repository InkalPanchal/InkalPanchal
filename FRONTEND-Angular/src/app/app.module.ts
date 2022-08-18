import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  entryComponents: [LoginComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CartComponent,
    CategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
