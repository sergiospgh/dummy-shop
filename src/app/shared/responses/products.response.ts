export interface FetchProductsResponse {
  limit: number;
  products: ProductResponse[];
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
