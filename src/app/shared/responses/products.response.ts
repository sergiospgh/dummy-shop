export interface GetProductsResponse {
  products: ProductResponse[];
  limit: number;
  skip: number;
  total: number;
}

export interface ProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
