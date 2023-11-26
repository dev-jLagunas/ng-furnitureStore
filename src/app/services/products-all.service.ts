import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Furniture } from '../interfaces/products.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsAllService {
  private products: Furniture[] = [];
  private filteredProducts: Furniture[] = [];

  constructor(private httpService: HttpService) {}

  fetchDataAndTransform(): Observable<Furniture[]> {
    return this.httpService.getAllProducts().pipe(
      map((data) => {
        this.products = data.map((item) => ({
          id: item.id,
          fields: {
            company: item.fields.company,
            colors: item.fields.colors,
            featured: item.fields.featured,
            price: item.fields.price,
            name: item.fields.name,
            image: item.fields.image,
          },
        }));
        return this.products;
      }),
      catchError((error) => {
        console.error('Error fetching and transforming products:', error);
        throw 'Something went wrong!';
      })
    );
  }

  getProducts(): Furniture[] {
    return this.products;
  }

  filterBySearchTerm(searchTerm: string): Furniture[] {
    return this.filteredProducts.length
      ? this.filteredProducts.filter((product) =>
          product.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : this.products.filter((product) =>
          product.fields.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  }

  filterByPriceRange(priceRange: number): Furniture[] {
    return this.filteredProducts.length
      ? this.filteredProducts.filter(
          (product) => product.fields.price <= priceRange
        )
      : this.products.filter((product) => product.fields.price <= priceRange);
  }

  getFilteredProducts(): Furniture[] {
    return this.filteredProducts;
  }

  clearFilters() {
    this.filteredProducts = [];
  }
}
