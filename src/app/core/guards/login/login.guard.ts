import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core.module';
import { LoginFacade } from '@modules/login/facade/login.facade';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: CoreModule,
})
export class LoginGuard {
  constructor(private readonly loginFacade: LoginFacade) {}

  canActivate(): Observable<boolean> {
    return this.isUserAuthenticated();
  }

  canActivateChild(): Observable<boolean> {
    return this.isUserAuthenticated();
  }

  private isUserAuthenticated(): Observable<boolean> {
    return this.loginFacade.token.pipe(
      take(1),
      map((token) => token !== null),
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          console.error('User is not authenticated');
          this.logOut();
          return false;
        } else {
          return true;
        }
      })
    );
  }

  private logOut(): void {
    this.loginFacade.logOut();
  }
}
