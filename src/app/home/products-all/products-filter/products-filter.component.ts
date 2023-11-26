import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css',
})
export class ProductsFilterComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() priceRangeEvent = new EventEmitter<number>();

  searchText: string = '';
  priceRange: number = 0;

  onSearch() {
    this.searchEvent.emit(this.searchText);
  }

  onPriceRangeChange() {
    this.priceRangeEvent.emit(this.priceRange);
  }

  clearFilters() {
    this.searchText = '';
    this.priceRange = 0;
    this.onSearch();
  }
}
