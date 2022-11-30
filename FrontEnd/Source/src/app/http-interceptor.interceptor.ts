import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    //Get Token data from local storage
      let tokenInfo =localStorage.getItem('TokenInfo');
    if(typeof tokenInfo == 'string'){
      var obj = JSON.parse(tokenInfo);
    }
      if (obj && obj.token) {
        request = request.clone({
        setHeaders: {
        Authorization: `Bearer ${obj.token}`
        }
        });
        }
    return next.handle(request);
  }
}
