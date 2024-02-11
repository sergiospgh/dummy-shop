import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginFacade } from '@modules/login/facade/login.facade';
import { Product } from '@shared/interfaces/products.interface';
import { takeUntil } from 'rxjs';
import { ProductsFacade } from './facade/products.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  onlyFavorites = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsFacade: ProductsFacade,
    private readonly loginFacade: LoginFacade
  ) {
    // Control navigation to this component
    this.activatedRoute.data.subscribe((data) => {
      // Check if the route has a 'favorites' parameter
      this.onlyFavorites = !!data['favorites'];

      // If not, reset all the favorite products
      if (!this.onlyFavorites) {
        this.productsFacade.resetFavoriteProducts();
      }
    });
  }

  ngOnInit(): void {
    this.setListeners();
  }

  toggleProductFavorite(product: Product) {
    this.productsFacade.toggleProductFavorite(product);
  }

  private setListeners() {
    this.productsFacade.products
      .pipe(takeUntil(this.loginFacade.unsubscribe$))
      .subscribe((products) => {
        if (!products || !products.length) {
          this.productsFacade.fetchProducts();
        }

        if (this.onlyFavorites) {
          products = products.filter(
            (product) =>
              product.isFavorite === true || product.isFavorite === false
          );
        }
        this.products = products;
      });
  }
}
