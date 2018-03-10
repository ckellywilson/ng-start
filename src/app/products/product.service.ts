import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
  private _productUrl = './api/products/products.json';

  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this._httpClient
      .get<IProduct[]>(this._productUrl)
      .do(data => console.log(JSON.stringify(data)));
  }
}
