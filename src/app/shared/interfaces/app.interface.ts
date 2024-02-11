import { LoginState } from './login.interface';
import { ProductsState } from './products.interface';

export interface AppState {
  login: LoginState;
  products: ProductsState;
}
