import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products')
  }

  create(product: ProductModel): Observable<void> {
    return this._httpClient.post('https://fakestoreapi.com/products', product).pipe(map(_ => void 0));
  }
}
