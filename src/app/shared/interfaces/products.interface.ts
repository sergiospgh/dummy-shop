import { ProductResponse } from '@shared/responses/products.response';

export interface ProductsState {
  items: Product[];
}

export interface Product extends ProductResponse {
  isFavorite: boolean;
}
