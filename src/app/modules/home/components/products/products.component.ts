import { Component, OnInit } from '@angular/core';
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

  constructor(private readonly productsFacade: ProductsFacade) {}

  ngOnInit(): void {
    this.productsFacade.fetchProducts();

    this.setListeners();
  }

  onAddToFavorites(producto: Product) {
    console.log('producto', producto);
  }

  private setListeners() {
    this.productsFacade.products
      .pipe(takeUntil(this.productsFacade.unsubscribe$))
      .subscribe((products) => {
        this.products = products;
      });
  }
}
