// import { Component } from '@angular/core';
// import { Product } from 'src/app/product';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent {
//   cartItems: Product[] = [];

//   // Function to add quantity of a product in the cart
//   addQuantity(product: Product) {
//     // Check if there is stock available for this product
//     if (product.stock > 0) {
//       product.stock--;
//       const cartItem = this.cartItems.find(item => item.id === product.id);
//       if (cartItem) {
//         // Increase the quantity of an existing cart item
//         cartItem.stock++;
//       } else {
//         // Add the product to the cart if it's not already there
//         this.cartItems.push({ ...product, stock: 1 });
//       }
//     } else {
//       alert('Product is out of stock');
//     }
//   }

//   // This function calculates the total price of the items in the cart.
//   calculateTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + item.price, 0);
//   }
//   // Function to generate the bill
//   generateBill() {
//     const totalBill = this.cartItems.reduce((total, item) => total + item.price * item.stock, 0);
//     alert(`Total Bill: $${totalBill.toFixed(2)}`);
//   }
// }
