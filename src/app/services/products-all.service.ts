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

  constructor(private httpService: HttpService) {}

  // Fetch and transform the data
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

  // Access the transformed data
  getProducts(): Furniture[] {
    return this.products;
  }
}
