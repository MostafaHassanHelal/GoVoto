import { Component, OnInit } from '@angular/core';
import { UserBloc } from '../BLoC/UserBloc';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;

  constructor(private  api : ApiService, private router:Router) {}

  ngOnInit() {
  }

  async login(email:string, password:string){
    console.log("Login Clicked");
    await UserBloc.login(email,password).then((val)=>{

    },err=>{
      this.error = err.error.message;
    });
    console.log(UserBloc.user);

    if(UserBloc.user!=null && UserBloc.user.api_token!=null){
      this.router.navigate(["rules"]);
    }
  }

}
