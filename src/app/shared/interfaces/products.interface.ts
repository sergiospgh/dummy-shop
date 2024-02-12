import { ProductResponse } from '@shared/responses/products.response';

export interface ProductsState {
  items: Product[];
  limit: number;
  skip: number;
  total: number;
}

export interface Product extends ProductResponse {
  isFavorite: boolean | null;
}

export interface ProductsFilter {
  skip: number;
  limit: number;
}
