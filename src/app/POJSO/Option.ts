export class Option{
    id:bigint;
    rule_id:bigint;
    name:string;
    count:bigint;

    constructor(id:bigint,rule_id:bigint,name:string,count:bigint){
        this.id = id;
        this.rule_id = rule_id;
        this.name = name;
        this.count = count;
    }

    public static fromJson(option:ArrayBuffer){
        return new Option(
            option["id"],
            option["rule_id"],
            option["name"],
            option["count"]
        );
    }
}