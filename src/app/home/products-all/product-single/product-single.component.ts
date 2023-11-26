import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSingleService } from '../../../services/products-single.service';
import { ActivatedRoute } from '@angular/router';
import { SingleFurniture } from '../../../interfaces/products.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-single.component.html',
  styleUrl: './product-single.component.css',
})
export class ProductSingleComponent implements OnInit {
  singleProductData!: SingleFurniture;

  constructor(
    private productsSingleService: ProductsSingleService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Details | Leafe');
    const productId: string | null =
      this.route.snapshot.paramMap.get('id') ?? '';
    this.productsSingleService.getSingleProductData(productId).subscribe(
      (data) => {
        this.singleProductData = data;
      },
      (error) => {
        console.error('Error fetching single product data:', error);
      }
    );
  }
}
