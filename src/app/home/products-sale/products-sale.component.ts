import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-sale.component.html',
  styleUrl: './products-sale.component.css',
})
export class ProductsSaleComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Sale | Leafe');
  }
}
