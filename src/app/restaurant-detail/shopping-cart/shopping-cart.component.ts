import { MenuItem } from 'app/model/menu-item.model';
import { CartItem } from './../../model/cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items() : CartItem[]{
    return this.cartService.items;
  }

  total(): number{
    return this.cartService.total();
  }

  addItem(item: MenuItem){
    this.cartService.additemToCart(item);
  }

  removeItem(item: CartItem){
    this.cartService.removeItemCart(item);
  }

  clearAllItens(){
    this.cartService.clear();
  }
}
