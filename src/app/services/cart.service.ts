import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartVisibleSource = new BehaviorSubject<boolean>(false);
  cartVisible$ = this.cartVisibleSource.asObservable();
  constructor() {}

  toggleCartVisibility() {
    this.cartVisibleSource.next(!this.cartVisibleSource.value);
  }
}
