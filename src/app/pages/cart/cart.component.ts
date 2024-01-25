import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from "@app/models/cart.model";
import { CartService } from "@app/services/cart.service";
import { HttpClient } from "@angular/common/http";
import { loadStripe } from "@stripe/stripe-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: []
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

  constructor(private cartService: CartService, private http: HttpClient) {
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

  onCheckout() {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51OcXgaFyYuZ89fkIeFMvHrNVY3nbZfH2Yirt01arz32Hyn6cZyiIfavFpRPPCD2useXZwTDqolTT0oxO1NCxIn9T00r0EfoprP')
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }
}
