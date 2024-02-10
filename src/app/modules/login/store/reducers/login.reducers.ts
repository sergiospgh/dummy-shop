import {
  logInSuccess,
  logOut,
} from '@modules/login/store/actions/login.actions';
import { createReducer, on } from '@ngrx/store';
import { LoginState } from '@shared/interfaces/login.interface';

export const loginInitialState: LoginState = {
  token: null,
  username: null,
};

export const loginReducer = createReducer(
  loginInitialState,
  on(
    logInSuccess,
    (state, action): LoginState => ({
      ...state,
      token: action.response.token,
      username: action.username,
    })
  ),
  on(logOut, (): LoginState => loginInitialState)
);
