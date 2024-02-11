import { Injectable, OnDestroy } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/app.interface';
import { Product } from '@shared/interfaces/products.interface';
import { Subject, take } from 'rxjs';
import {
  fetchProducts,
  resetFavoriteProducts,
  toggleProductFavorite,
} from '../store/actions/products.actions';
import { selectProducts } from '../store/selectors/products.selectors';

@Injectable()
export class ProductsFacade implements OnDestroy {
  readonly products = this.store.select(selectProducts);
  readonly unsubscribe$ = new Subject<void>();

  constructor(
    private readonly store: Store<AppState>,
    private readonly loginFacade: LoginFacade
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchProducts(): void {
    this.loginFacade
      .userIsAuthenticated()
      .pipe(take(1))
      .subscribe((isAuth) => {
        if (isAuth) {
          this.store.dispatch(fetchProducts());
        }
      });
  }

  toggleProductFavorite(product: Product) {
    this.store.dispatch(toggleProductFavorite({ id: product.id }));
  }

  resetFavoriteProducts() {
    this.store.dispatch(resetFavoriteProducts());
  }
}
