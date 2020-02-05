import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from '../token/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor(
    private  authentication: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let authService = this.authentication.getToken() || "";//injector.get(UserService);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService}`
      }
    });
    // console.log(tokenizedReq);
    return next.handle(tokenizedReq);
  }
}
