import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/app.interface';
import { LoginPayload } from '@shared/payloads/login.payload';
import { Observable, Subject, map } from 'rxjs';
import { logIn } from '../store/actions/login.actions';
import { selectToken } from '../store/selectors/login.selectors';

@Injectable()
export class LoginFacade implements OnDestroy {
  readonly token = this.store.select(selectToken);
  readonly unsubscribe$ = new Subject<void>();

  constructor(private readonly store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(payload: LoginPayload): void {
    this.store.dispatch(logIn({ payload }));
  }

  logOut(): void {
    // TODO: Call logOut action
    // this.router.navigate([ROUTES.LOGIN]);
  }

  userIsAuthenticated(): Observable<boolean> {
    return this.token.pipe(map((token) => token !== null));
  }
}
