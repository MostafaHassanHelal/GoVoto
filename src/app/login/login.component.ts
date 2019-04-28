import { Component, OnInit } from '@angular/core';
import { UserBloc } from '../BLoC/UserBloc';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;

  constructor(private  api : ApiService) {}

  ngOnInit() {
  }

  async login(email:string, password:string){
    console.log("Login Clicked");
    await UserBloc.login(email,password).catch((err:Error)=>{
      this.error = err.message;
    });
    console.log(UserBloc.user);
  }

}
