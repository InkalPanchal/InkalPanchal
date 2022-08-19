import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { CategoryComponent } from "./category/category.component";
import { OtpComponent } from './otp/otp.component';


@NgModule ({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CategoryComponent,
    OtpComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
