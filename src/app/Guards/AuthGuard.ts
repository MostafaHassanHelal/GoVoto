import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserBloc } from '../BLoC/UserBloc';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (UserBloc.user==null||UserBloc.user.api_token==null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class AuthGuard_Login implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (UserBloc.user==null||UserBloc.user.api_token==null) {
      this.router.navigate(['rules']);
      return false;
    }
    return true;
  }
}