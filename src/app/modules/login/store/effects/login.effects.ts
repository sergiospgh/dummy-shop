import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/services/login.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTES } from '@shared/constants/routes.constants';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  logIn,
  logInFailure,
  logInSuccess,
  logOut,
} from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  constructor(
    private readonly router: Router,
    private readonly actions: Actions,
    private readonly loginService: LoginService
  ) {}

  readonly logIn$ = createEffect(() => {
    return this.actions.pipe(
      ofType(logIn),
      switchMap(({ payload }) =>
        this.loginService.login(payload).pipe(
          tap(() => this.router.navigate([ROUTES.PRODUCTS])),
          map((loginResponse) =>
            logInSuccess({
              response: loginResponse,
              username: payload.username,
            })
          ),
          catchError((error) => of(logInFailure({ error })))
        )
      )
    );
  });

  readonly logOut$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(logOut),
        tap(() => this.router.navigate([ROUTES.LOGIN]))
      );
    },
    { dispatch: false }
  );
}
