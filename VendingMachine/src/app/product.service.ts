import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      ItemId: 1,
      ItemName: 'Frooti',
      ItemStock: 13,
      ItemPrice: 10
    },
    {
      ItemId: 2,
      ItemName: 'Bourbon',
      ItemStock: 25,
      ItemPrice: 15
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
