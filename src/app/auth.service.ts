import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper : JwtHelperService) { }

  //Authentication method
  public isAuthenticated():boolean
  {
    const token = localStorage.getItem('token');

    //check whether the token has expired and return a true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

}
