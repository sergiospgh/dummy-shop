import { logOut } from '@modules/login/store/actions/login.actions';
import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '@shared/interfaces/products.interface';
import { fetchProductsSuccess } from '../actions/products.actions';

export const productsInitialState: ProductsState = {
  items: [],
};

export const productsReducer = createReducer(
  productsInitialState,
  on(
    fetchProductsSuccess,
    (state, action): ProductsState => ({
      ...state,
      items: action.response.products?.map((product) => ({
        ...product,
        isFavorite: false,
      })),
    })
  ),
  on(logOut, (): ProductsState => productsInitialState)
);
