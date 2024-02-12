import { logOut } from '@modules/login/store/actions/login.actions';
import { createReducer, on } from '@ngrx/store';
import {
  DefaultLimit,
  DefaultSkip,
} from '@shared/constants/products.constants';
import { ProductsState } from '@shared/interfaces/products.interface';
import {
  getProductsSuccess,
  resetFavoriteProducts,
  toggleProductFavorite,
} from '../actions/products.actions';

export const productsInitialState: ProductsState = {
  items: [],
  limit: DefaultLimit,
  skip: DefaultSkip,
  total: 0,
};

export const productsReducer = createReducer(
  productsInitialState,
  on(
    getProductsSuccess,
    (state, action): ProductsState => ({
      ...state,
      // Concatenate the old products and the new ones to avoid losing the favorite status
      // checking by id if the new product is not loaded
      items: [
        ...state.items,
        ...(
          action.response.products?.filter(
            (newProduct) =>
              !state.items.find((oldProduct) => oldProduct.id === newProduct.id)
          ) || []
        ).map((product) => ({
          ...product,
          isFavorite: null,
        })),
      ],
      limit: action.response.limit,
      skip: action.response.skip,
      total: action.response.total,
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
