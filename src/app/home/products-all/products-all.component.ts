import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-all',
  standalone: true,
  imports: [CommonModule, ProductsFilterComponent, ProductSingleComponent],
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent {
  constructor(private router: Router) {}

  navigateToSingleProduct() {
    this.router.navigate(['/products/single']);
  }
}
