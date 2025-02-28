import { Component, Input } from '@angular/core';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-card',
  imports: [ProductModalComponent],
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

  constructor(){console.log(this.id);}

  openProductModal() {
    this.openModal = true;
  }

  closeProductModal() {
    this.openModal = false;
  }
}