import { Injectable } from '@angular/core';
import { ProductsService } from '@app/services/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions: Actions,
    private readonly productsService: ProductsService
  ) {}

  readonly fetchProducts$ = createEffect(() => {
    return this.actions.pipe(
      ofType(fetchProducts),
      switchMap(() =>
        this.productsService.fetchProducts().pipe(
          map((response) => fetchProductsSuccess({ response })),
          catchError((error) => of(fetchProductsFailure({ error })))
        )
      )
    );
  });
}
