import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { FetchProductsResponse } from '@shared/responses/products.response';

export const fetchProducts = createAction('[Products] Fetch Products');

export const fetchProductsSuccess = createAction(
  '[Products API] Fetch Products Success',
  props<{ readonly response: FetchProductsResponse }>()
);

export const fetchProductsFailure = createAction(
  '[Products API] Fetch Products Failure',
  props<{ readonly error: HttpErrorResponse }>()
);
