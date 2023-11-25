import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { Router } from '@angular/router';
import { ProductsAllService } from '../../services/products-all.service';
import { Furniture } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products-all',
  standalone: true,
  imports: [CommonModule, ProductsFilterComponent, ProductSingleComponent],
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent implements OnInit {
  products: Furniture[] = [];
  constructor(
    private router: Router,
    private productsAllService: ProductsAllService
  ) {}

  ngOnInit() {
    this.fetchDataAndTransform();
  }

  navigateToSingleProduct(id: string) {
    this.router.navigate(['/products/single', id]);
  }

  fetchDataAndTransform() {
    this.productsAllService.fetchDataAndTransform().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching and transforming products:', error);
        // Handle error as needed
      }
    );
  }
}
