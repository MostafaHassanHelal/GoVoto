import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { AuthGuard } from './Guards/AuthGuard';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "rules", component: RulesComponent,canActivate:[AuthGuard]},
  {path: "", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
