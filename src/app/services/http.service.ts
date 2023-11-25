import { Injectable } from '@angular/core';
import { Furniture } from '../interfaces/products.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SingleFurniture } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private allProductsAPI: string =
    'https://course-api.com/javascript-store-products';

  private singleProductAPI: string =
    'https://course-api.com/javascript-store-single-product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(this.allProductsAPI).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => {
        return throwError('Something went wrong!');
      })
    );
  }

  getSingleProduct(id: string): Observable<SingleFurniture> {
    return this.http
      .get<SingleFurniture>(`${this.singleProductAPI}?id=${id}`)
      .pipe(
        map((data) => data),
        catchError((error) => {
          return throwError('Something went wrong!');
        })
      );
  }
}
