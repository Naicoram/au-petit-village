import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Product = {
  id: number,
  name: string,
  price: number,
  description: string,
  img: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/products.json')
  }

}
