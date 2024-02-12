import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ProductsFilter } from '@shared/interfaces/products.interface';
import { GetProductsResponse } from '@shared/responses/products.response';

export const getProducts = createAction(
  '[Products] Get Products',
  props<{ readonly filter: ProductsFilter }>()
);

export const getProductsSuccess = createAction(
  '[Products API] Get Products Success',
  props<{ readonly response: GetProductsResponse }>()
);

export const getProductsFailure = createAction(
  '[Products API] Get Products Failure',
  props<{ readonly error: HttpErrorResponse }>()
);

export const toggleProductFavorite = createAction(
  '[Products] Toggle Product Favorite',
  props<{ readonly id: number }>()
);

export const resetFavoriteProducts = createAction(
  '[Products] Reset Favorite Products'
);
