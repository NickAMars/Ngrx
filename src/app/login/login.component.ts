import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {AuthenticationService} from "../service/token/authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private route: Router) { }

  ngOnInit() {}

  onClickSubmit(user : User){
    console.log(user);
    this.auth.loginUser(user).subscribe(res=> {
          this.auth.setToken(res.headers.get('Authorization'));
          this.route.navigate(['/home']);
    },
  err=>{
    console.log(err);
  });
  }

}
