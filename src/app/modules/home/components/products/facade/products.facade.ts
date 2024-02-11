import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/interfaces/app.interface';
import { Product } from '@shared/interfaces/products.interface';
import { Subject } from 'rxjs';
import { fetchProducts } from '../store/actions/products.actions';
import { selectProducts } from '../store/selectors/products.selectors';

@Injectable()
export class ProductsFacade implements OnDestroy {
  readonly products = this.store.select(selectProducts);
  readonly unsubscribe$ = new Subject<void>();

  constructor(private readonly store: Store<AppState>) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchProducts(): void {
    this.store.dispatch(fetchProducts());
  }

  addProductToFavorites(product: Product) {
    console.log('addProductToFavorites product', product);
  }
}
