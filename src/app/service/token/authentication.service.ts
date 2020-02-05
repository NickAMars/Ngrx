import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import {User} from '../../models/user'
import {Register} from '../../models/register'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string = "http://localhost:8080/auth";

loginPath: string = "/login";
signupPath: string = "/signup";
logoutPath: string = "/logout";

  constructor(
        private http: HttpClient
  ) { }
  options = {

      observe: "response" as 'body', // to display the full response & as 'body' for type cast
  };

  loginUser(user: User):Observable<any>{
    return this.http.post(`${this.url}${this.loginPath}`, user, {
        observe: 'response'
    });
  }


  // register a user
  registerUser(register: Register):Observable<any>{
    return this.http.post(`${this.url}${this.signupPath}`,  register , this.options);
  }
  setToken( token: string ){
    localStorage.setItem('token', token );
  }
  logout(){
     localStorage.removeItem('token');
  }
  // check if the user is log in or not
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
