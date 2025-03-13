import { Injectable, signal } from '@angular/core';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  cart = signal<Product[]>([]);

  removeFromCart(arg0: Product) {
    const items = this.cart().filter((prod) => prod.id !== arg0.id);
    this.cart.set(items);
  }

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
  constructor() {}
}
