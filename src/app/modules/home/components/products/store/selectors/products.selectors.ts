import { createSelector } from '@ngrx/store';
import { AppState } from '@shared/interfaces/app.interface';
import { ProductsState } from '@shared/interfaces/products.interface';

export const getProducts = (state: AppState): ProductsState => state.products;

export const selectProducts = createSelector(
  getProducts,
  (products) => products?.items
);
