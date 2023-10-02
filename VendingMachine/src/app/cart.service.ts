import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    const cartItem = this.cartItems.find(item => item.ItemId === product.ItemId);
      if (cartItem) {
        // Increase the quantity of an existing cart item
        product.ItemStock--;
        cartItem.ItemStock++;
      }
      product.ItemStock--;
      this.cartItems.push({ ...product, ItemStock: 1 }); // Add a new item to the cart
    
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  generateBill(): number {
    
    return  this.cartItems.reduce((accumulator, item) => accumulator + item.ItemPrice * item.ItemStock, 0);
  }
}
