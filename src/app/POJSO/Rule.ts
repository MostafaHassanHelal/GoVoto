export class Rule{
    id:bigint;
    title:string;
    desc:string;
    votes_up:bigint;
    votes_down:bigint;

    constructor(id:bigint,title:string,desc:string,votes_up:bigint,votes_down:bigint){
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.votes_down = votes_down;
        this.votes_up = votes_up;
    }


    public static fromJson(rule:ArrayBuffer){
        return new Rule(
            rule["id"],
            rule["title"],
            rule["desc"],
            rule["votes_up"],
            rule["votes_down"]
        );
    }
}