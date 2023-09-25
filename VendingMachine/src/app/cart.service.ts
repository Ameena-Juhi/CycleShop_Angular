import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    const cartItem = this.cartItems.find(item => item.id === product.id);
      if (cartItem) {
        // Increase the quantity of an existing cart item
        product.stock--;
        cartItem.stock++;
      }
      product.stock--;
      this.cartItems.push({ ...product, stock: 1 }); // Add a new item to the cart
    
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  generateBill(): number {
    
    return  this.cartItems.reduce((accumulator, item) => accumulator + item.price * item.stock, 0);
  }
}
