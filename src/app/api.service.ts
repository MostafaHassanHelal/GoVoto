import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./POJSO/User"
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: object;
  static http:HttpClient;
  constructor(private http: HttpClient){ApiService.http = this.http}

  public static login(email:string, password:string):Promise<User>{
    let body = {"email":email,"password":password};
    return new Promise(resolve=>{
    ApiService.http.post("http://127.0.0.1:8000/api/user/login",body).subscribe((user:ArrayBuffer)=>{
        resolve(User.fromJson(user));
      },err=>{
        console.log(err);
      });
    });
  }

  public static logout(api_token:string):Promise<any>{
    return new Promise(resolve=>{
    ApiService.http.post("http://127.0.0.1:8000/api/user/logout?api_token="+api_token,{}).subscribe((success:ArrayBuffer)=>{
        resolve(success);
      },err=>{
        console.log(err);
      });
    });
  }

  // read() {
  //   this.http.get("http://localhost/app/read.php").subscribe(data => {
  //     this.data = data;
  //   })
  //   return this.data;
  // }
  // create(stu){
  //   this.http.post("http://localhost/app/create.php",stu).subscribe:ArrayBuffer(response=>{
  //     console.log(respon.fromJson(user)se);
  //   }
  //   ,(err)=>{console.log(err);}
  //   );
  // }
  // delete(id){
  //   this.http.post("http://localhost/app/delete.php",id).subscribe:ArrayBuffer(response=>{
  //     console.log(respon.fromJson(user)se);
  //   }
  //   ,(err)=>{console.log(err);}
  //   );
  // }
  // update(stu){
  //   this.http.post("http://localhost/app/update.php",stu).subscribe:ArrayBuffer(response=>{
  //     console.log(respon.fromJson(user)se);
  //   }
  //   ,(err)=>{console.log(err);}
  //   );
  // }
}
