import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsAllComponent } from './home/products-all/products-all.component';
import { AboutComponent } from './home/about/about.component';
import { ProductsSaleComponent } from './home/products-sale/products-sale.component';
import { ContactComponent } from './home/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductSingleComponent } from './home/products-all/product-single/product-single.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsAllComponent },
  { path: 'products/single', component: ProductSingleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sale', component: ProductsSaleComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];
