import { Option } from './Option';
import { DatePipe } from '@angular/common';
import { isNumber } from 'util';

export class Rule{
    id:bigint;
    title:string;
    desc:string;
    start_time: DatePipe;
    end_time: DatePipe;
    options:Option[];

    constructor(id:bigint,title:string,desc:string,start_time:DatePipe,end_time:DatePipe ,options:Option[]){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.start_time = start_time;
        this.end_time = end_time;
        this.options = options;
        
    }


    public static fromJson(rule:ArrayBuffer){
        rule['options'].map(option => Option.fromJson(option));
        return new Rule(
            rule["id"],
            rule["title"],
            rule["desc"],
            rule["start_time"],
            rule["end_time"],
            rule["options"]
        );
    }
}