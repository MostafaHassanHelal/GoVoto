import { User } from '../POJSO/User';
import { ApiService } from '../api.service';
export class UserBloc{

    static user:User = null; 

    public static async login(email:string,password:string){
        UserBloc.user = await ApiService.login(email,password);
    }

    public static async logout(){
        await ApiService.logout(UserBloc.user.api_token);
        UserBloc.user = null;
    }
}