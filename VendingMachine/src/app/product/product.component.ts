// import { Component } from '@angular/core';
// import { Product } from '../product';
// import { ProductService } from '../product.service';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-products',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent {
//   Id: number = 1;
//   products: Product[] = [];

//   constructor(private productService: ProductService, 
//     private cartService: CartService)
//    {}

//   ngOnInit(): void {
//     this.products = this.productService.getProducts();
//   }

//   addToCart(product: Product): void {
//     this.cartService.addToCart(product);
//   }

//   addProductToCartById(): void {
//     const product = this.getProductById(this.Id);
//     if (product) {
//       this.addToCart(product);
//     } else {
//       alert('Product not found');
//     }
//   }
  
//   getProductById(id: number): Product | undefined {
//     return this.products.find(product => product.ItemId === id);
//   }
// }
