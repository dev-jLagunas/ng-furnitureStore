import { Injectable } from '@angular/core';
import { SingleFurniture } from '../interfaces/products.interface';
import { HttpService } from './http.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsSingleService {
  constructor(private httpService: HttpService) {}

  getSingleProductData(id: string): Observable<SingleFurniture> {
    return this.httpService.getSingleProduct(id).pipe(
      map((data) => {
        const transformedData: SingleFurniture = {
          id: data.id,
          fields: {
            company: data.fields.company,
            colors: data.fields.colors,
            featured: data.fields.featured,
            price: data.fields.price,
            name: data.fields.name,
            description: data.fields.description,
            image: data.fields.image.map((img) => ({
              id: img.id,
              url: img.url,
            })),
          },
        };

        return transformedData;
      }),
      catchError((error) => {
        console.error('Error fetching single product:', error);
        return throwError('Something went wrong!');
      })
    );
  }
}
