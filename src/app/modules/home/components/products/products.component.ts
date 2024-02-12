import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';
import {
  DefaultFilter,
  DefaultSkip,
  LimitOptions,
} from '@shared/constants/products.constants';
import { Product } from '@shared/interfaces/products.interface';
import { takeUntil } from 'rxjs';
import { ProductsFacade } from './facade/products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  readonly LimitOptions = LimitOptions;

  products: Product[] = [];
  total = 0;
  filter = DefaultFilter;

  constructor(
    private readonly productsFacade: ProductsFacade,
    private readonly loginFacade: LoginFacade
  ) {}

  ngOnInit(): void {
    this.productsFacade.resetFavoriteProducts();

    this.setListeners();
  }

  toggleProductFavorite(product: Product) {
    this.productsFacade.toggleProductFavorite(product);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeProductsPerPage(event: any) {
    this.filter = { skip: DefaultSkip, limit: event.target.value };
    this.productsFacade.getProducts(this.filter);
  }

  changePage(page: 'previous' | 'next') {
    if (page === 'previous') {
      this.filter = {
        ...this.filter,
        skip: this.filter.skip - this.filter.limit,
      };
    } else {
      this.filter = {
        ...this.filter,
        skip: this.filter.skip + this.filter.limit,
      };
    }
    this.productsFacade.getProducts(this.filter);
  }

  getCurrentPage(): number {
    return this.filter.skip / this.filter.limit + 1;
  }

  private setListeners() {
    this.productsFacade.products
      .pipe(takeUntil(this.loginFacade.unsubscribe$))
      .subscribe(({ items, limit, skip, total }) => {
        if (!items || !items.length) {
          this.productsFacade.getProducts(this.filter);
        }

        // Update products to the current page
        this.products = items.slice(skip, this.getCurrentPage() * limit);
        this.filter = { ...this.filter, limit, skip };
        this.total = total;
      });
  }
}
