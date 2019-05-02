import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Rule } from '../POJSO/Rule';
import { UserBloc } from '../BLoC/UserBloc';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules:Rule[];
  error_message:string;

  constructor() {
    console.log("rules:Constructor");
    ApiService.getRules().then(rules=>{
      console.log("rules:"+rules);
      this.rules = rules;
    });
  }
  

  ngOnInit() {
  }

  async vote(ruleId:number,val:number){
    await ApiService.vote(UserBloc.user.api_token,ruleId,val).then(val=>{

    },err=>{
      this.error_message = err.error.message;
      console.log(err.error.message);
    });
    this.rules = await ApiService.getRules();
  }


}
