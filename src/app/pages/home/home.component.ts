import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../../components/redirect-button/redirect-button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MOCK_PRODUCTS } from '../../../mock/products.mock';

@Component({
  selector: 'app-home',
  imports: [
    RedirectButtonComponent,
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = MOCK_PRODUCTS;
  currentPage: number = 1;
  itemsPerPage: number = 12;

  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.products.length / this.itemsPerPage)) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  toglePage(page: number | string) {
    if (typeof page === 'number'){
      this.currentPage = page;
    }
  }

  get paginationPages() {
    const total = this.totalPages;
    const pages = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
      } else if (this.currentPage >= total - 2) {
        pages.push(1, '...');
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1, '...');
        for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push('...', total);
      }
    }

    return pages;
  }
}
