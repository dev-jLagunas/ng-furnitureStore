import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';

@Component({
  selector: 'app-cart-main',
  standalone: true,
  imports: [CommonModule, CartItemComponent],
  templateUrl: './cart-main.component.html',
  styleUrl: './cart-main.component.css',
})
export class CartMainComponent {
  isCartOpen = true;
  isCartClosing = false;
  constructor(private cartService: CartService) {}

  closeCart() {
    this.isCartClosing = true;

    setTimeout(() => {
      this.cartService.toggleCartVisibility();
      this.isCartClosing = false;
    }, 990);
  }
}
