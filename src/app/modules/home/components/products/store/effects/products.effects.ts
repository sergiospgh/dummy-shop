import { Injectable } from '@angular/core';
import { ProductsService } from '@app/services/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getProducts,
  getProductsFailure,
  getProductsSuccess,
} from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions: Actions,
    private readonly productsService: ProductsService
  ) {}

  readonly getProducts$ = createEffect(() => {
    return this.actions.pipe(
      ofType(getProducts),
      switchMap(({ filter }) =>
        this.productsService.getProducts(filter).pipe(
          map((response) => getProductsSuccess({ response })),
          catchError((error) => of(getProductsFailure({ error })))
        )
      )
    );
  });
}
