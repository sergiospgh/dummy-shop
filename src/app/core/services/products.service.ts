import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreModule } from '@app/core.module';
import { ENDPOINT } from '@shared/constants/endpoints.constants';
import { FetchProductsResponse } from '@shared/responses/products.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: CoreModule,
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  fetchProducts(): Observable<FetchProductsResponse> {
    const url = ENDPOINT.PRODUCTS.GET_ALL;
    return this.http.get<FetchProductsResponse>(url);
  }
}
