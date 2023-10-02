// import { Component } from '@angular/core';
// import { Product } from '../product';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   cartItems: Product[] = [];
//   quantity:number=1;

//   constructor(private cartService: CartService) {
//     this.cartItems = this.cartService.getCartItems();
//   }

//   addQuantity(quantity:number,product: Product): Product[] {
//     const cartItem = this.cartItems.find(item => item.ItemId === product.ItemId);
//     if (cartItem) {
//       if (product.ItemStock >= quantity) {
//         // Decrease the stock of the product
//         product.ItemStock -= quantity;}
//       // Increase the quantity of an existing cart item
//       cartItem.ItemStock+=quantity;
//     }
    
//     return this.cartItems;
//   }

//   calculateTotalPrice(product:Product): number {
//         return product.ItemPrice*product.ItemStock;
//       }

//   generateBill(): number {
//     return this.cartService.generateBill();
//   }
// }
