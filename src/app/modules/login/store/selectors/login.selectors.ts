import { createSelector } from '@ngrx/store';
import { AppState } from '@shared/interfaces/app.interface';
import { LoginState } from '@shared/interfaces/login.interface';

export const getLogin = (state: AppState): LoginState => state.login;

export const selectToken = createSelector(getLogin, (login) => login?.token);

export const selectUsername = createSelector(
  getLogin,
  (login) => login?.username
);
