import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from "@app/models/cart.model";
import { CartService } from "@app/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1
    },
      {
        product: 'https://via.placeholder.com/150',
        name: 'snickers',
        price: 150,
        quantity: 3,
        id: 2
      }]
  }
  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart

      this.dataSource = this.cart.items
    })
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items)
  }

  onClearCart() {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem) {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem) {
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem) {
    this.cartService.removeQuantity(item)
  }
}
