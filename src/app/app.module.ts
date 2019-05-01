import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RulesComponent } from './rules/rules.component';
import { AuthGuard, AuthGuard_Login } from './Guards/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [AuthGuard,AuthGuard_Login],
  bootstrap: [AppComponent]
})
export class AppModule { }
