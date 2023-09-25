import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Frooti',
      stock: 13,
      price: 10
    },
    {
      id: 2,
      name: 'Bourbon',
      stock: 25,
      price: 15
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
