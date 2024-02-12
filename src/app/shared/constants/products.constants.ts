import { ProductsFilter } from '@shared/interfaces/products.interface';

export const DefaultSkip = 0;
export const DefaultLimit = 5;

export const LimitOptions = [5, 10, 15, 20];

export const DefaultFilter: ProductsFilter = {
  skip: DefaultSkip,
  limit: DefaultLimit,
};
