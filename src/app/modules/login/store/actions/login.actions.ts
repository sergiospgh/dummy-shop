import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { LoginPayload } from '@shared/payloads/login.payload';
import { LoginResponse } from '@shared/responses/login.response';

export const logIn = createAction(
  '[Login] Log In',
  props<{ readonly payload: LoginPayload }>()
);

export const logInSuccess = createAction(
  '[Login API] Log In Success',
  props<{ readonly response: LoginResponse; readonly username: string }>()
);

export const logInFailure = createAction(
  '[Login API] Log In Failure',
  props<{ readonly error: HttpErrorResponse }>()
);

export const logOut = createAction('[Login] Log Out');
