import { Component } from '@angular/core';
import {AuthenticationService} from "./service/token/authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private auth: AuthenticationService,
private route: Router){}


getToken(){
return this.auth.loggedIn();
}

  logout(){
    this.auth.logout();
    this.route.navigate(['/']);
  }
}
