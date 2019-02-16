import { MenuItem } from './../../model/menu-item.model';
import { CartItem } from './../../model/cart-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = []
  }

  additemToCart(item: MenuItem) {
    let itemFounded = this.items.find(x => x.menuItem.id == item.id);
    if (itemFounded) {
      itemFounded.quantity++;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItemCart(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map(x => x.value()).reduce((prev, val) => prev + val, 0);
  }
}
