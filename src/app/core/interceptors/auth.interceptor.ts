import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';
import { Observable, take } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private reqClone!: HttpRequest<unknown>;

  constructor(private readonly loginFacade: LoginFacade) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loginFacade.token.pipe(take(1)).subscribe((token) => {
      if (token) {
        this.reqClone = req.clone({
          headers: new HttpHeaders({ Authorization: `Bearer ${token}` }),
          body: req.body ?? {},
        } as HttpRequest<unknown>);
      } else {
        this.reqClone = req.clone();
      }
    });

    return next.handle(this.reqClone);
  }
}
