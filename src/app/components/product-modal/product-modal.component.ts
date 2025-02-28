import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-modal',
  imports: [RedirectButtonComponent],
  providers:[ProductsService],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  @Input() openModal: boolean = false;
  @Input() id!: number;
  @Output("toogle") onToggle = new EventEmitter();
  productData!: Product;

  constructor(private productService: ProductsService){
    this.productData = this.productService.selectProductById(this.id)
  }
  
  toggle() {
    this.onToggle.emit();
  }
}
