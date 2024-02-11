import { logOut } from '@modules/login/store/actions/login.actions';
import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '@shared/interfaces/products.interface';
import {
  fetchProductsSuccess,
  resetFavoriteProducts,
  toggleProductFavorite,
} from '../actions/products.actions';

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
        isFavorite: null,
      })),
    })
  ),
  on(
    toggleProductFavorite,
    (state, action): ProductsState => ({
      ...state,
      items: state.items.map((product) =>
        product.id === action.id
          ? { ...product, isFavorite: !product.isFavorite ? true : false }
          : product
      ),
    })
  ),
  on(
    resetFavoriteProducts,
    (state): ProductsState => ({
      ...state,
      items: state.items.map((product) => ({
        ...product,
        isFavorite: product.isFavorite || null, // Reset the favorite products to null
      })),
    })
  ),
  on(logOut, (): ProductsState => productsInitialState)
);
