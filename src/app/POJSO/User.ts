export class User{
    id: bigint;
    name: string;
    email: string;
    api_token: string;

    constructor(id:bigint, name:string, email:string,api_token:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.api_token = api_token;
    };

    public static fromJson(user:ArrayBuffer):User {
       return new User(
            user["id"],
            user["name"],
            user["email"],
            user["api_token"]
        );
    }
}