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
  encrypted : Map<bigint,boolean> = new Map;
  error_message:string;

  constructor() {
    console.log("rules:Constructor");
    ApiService.getRules().then(rules=>{
      console.log("rules:"+rules);
      this.rules = rules;
      console.log(typeof rules[0].options[0].count);
      for(let i = 0; i<rules.length;i++){
        if(typeof rules[i].options[0].count == "number"){
          this.encrypted[Number(rules[i].id)] = false;
        }else{
          this.encrypted[Number(rules[i].id)] = true;
        }
      }
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
