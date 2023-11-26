import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductSingleComponent } from './product-single/product-single.component';
import { Router } from '@angular/router';
import { ProductsAllService } from '../../services/products-all.service';
import { Furniture } from '../../interfaces/products.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products-all',
  standalone: true,
  imports: [CommonModule, ProductsFilterComponent, ProductSingleComponent],
  templateUrl: './products-all.component.html',
  styleUrl: './products-all.component.css',
})
export class ProductsAllComponent implements OnInit {
  loading: boolean = true;
  products: Furniture[] = [];
  filteredProducts: Furniture[] = [];
  @ViewChild(ProductsFilterComponent)
  productsFilterComponent!: ProductsFilterComponent;

  constructor(
    private router: Router,
    private productsAllService: ProductsAllService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.fetchDataAndTransform();
    this.titleService.setTitle('Products | Leafe');
    this.loadData();
  }

  navigateToSingleProduct(id: string) {
    this.router.navigate(['/products/single', id]);
  }

  fetchDataAndTransform() {
    this.loading = true;
    this.productsAllService.fetchDataAndTransform().subscribe(
      (data) => {
        this.products = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching and transforming products:', error);
        this.loading = false;
      }
    );
  }

  loadData() {
    this.productsAllService.fetchDataAndTransform().subscribe((data) => {
      this.filteredProducts = data;
    });
  }

  onSearch(searchTerm: string) {
    this.filteredProducts =
      this.productsAllService.filterBySearchTerm(searchTerm);
  }

  onPriceRangeChange(priceRange: number) {
    this.filteredProducts =
      this.productsAllService.filterByPriceRange(priceRange);
  }

  clearFilters() {
    this.filteredProducts = this.products;
    this.productsFilterComponent.clearFilters();
  }
}
