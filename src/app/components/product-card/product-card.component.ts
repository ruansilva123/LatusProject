import { Component, Input } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ProductSizesComponent } from '../product-sizes/product-sizes.component';

@Component({
  selector: 'app-product-card',
  imports: [
    ProductModalComponent,
    ProductSizesComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() price!: number;
  @Input() sizes!: string[];
  @Input() imageRoot!: string;

  openModal: boolean = false;

  openProductModal() {
    this.openModal = true;
  }

  closeProductModal() {
    this.openModal = false;
  }
}