import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core.module';
import { ENDPOINT } from '@shared/constants/endpoints.constants';
import { ProductsFilter } from '@shared/interfaces/products.interface';
import { ProductPayload } from '@shared/payloads/product.payload';
import { GetProductsResponse } from '@shared/responses/products.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule,
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getProducts(filter: ProductsFilter): Observable<GetProductsResponse> {
    const url = ENDPOINT.PRODUCTS.GET_ALL;
    return this.http.get<GetProductsResponse>(url, { params: { ...filter } });
  }

  addProduct(product: ProductPayload): Observable<void> {
    const url = ENDPOINT.PRODUCTS.ADD;
    return this.http.post<void>(url, product);
  }

  updateProduct(product: ProductPayload): Observable<void> {
    const url = ENDPOINT.PRODUCTS.UPDATE.replace('{id}', product.id.toString());
    return this.http.put<void>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    const url = ENDPOINT.PRODUCTS.DELETE.replace('{id}', id.toString());
    return this.http.delete<void>(url);
  }
}
