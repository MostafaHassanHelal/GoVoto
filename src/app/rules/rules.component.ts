import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Rule } from '../POJSO/Rule';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules:Rule[];

  constructor() {
    ApiService.getRules().then(rules=>{
      this.rules = rules;
    });
  }
  

  ngOnInit() {
  }

}
