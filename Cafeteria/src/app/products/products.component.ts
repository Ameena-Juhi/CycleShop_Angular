import { Component } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  Id: number = 1;

  products: Product[] = [
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

  
}
