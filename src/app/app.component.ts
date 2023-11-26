import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartMainComponent } from './cart-main/cart-main.component';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartMainComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cartItemsCount: number = 0;
  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItemsCount = cartItems.length;
    });
  }

  get cartVisible$() {
    return this.cartService.cartVisible$;
  }

  toggleCart() {
    this.cartService.toggleCartVisibility();
  }
}
