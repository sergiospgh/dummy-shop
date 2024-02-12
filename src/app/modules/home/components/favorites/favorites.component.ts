import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';
import { LimitOptions } from '@shared/constants/products.constants';
import { Product } from '@shared/interfaces/products.interface';
import { takeUntil } from 'rxjs';
import { ProductsFacade } from '../products/facade/products.facade';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  readonly LimitOptions = LimitOptions;

  favoriteProducts: Product[] = [];

  constructor(
    private readonly productsFacade: ProductsFacade,
    private readonly loginFacade: LoginFacade
  ) {}

  ngOnInit(): void {
    this.setListeners();
  }

  toggleProductFavorite(product: Product) {
    this.productsFacade.toggleProductFavorite(product);
  }

  private setListeners() {
    this.productsFacade.products
      .pipe(takeUntil(this.loginFacade.unsubscribe$))
      .subscribe(({ items }) => {
        items = items.filter(
          (product) =>
            product.isFavorite === true || product.isFavorite === false
        );

        this.favoriteProducts = items;
      });
  }
}
