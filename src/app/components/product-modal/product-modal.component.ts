import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';
import { ProductsService } from '../../services/product/products.service';
import { Product } from '../../interface/product';
import { ProductSizesComponent } from '../product-sizes/product-sizes.component';

@Component({
  selector: 'app-product-modal',
  imports: [
    RedirectButtonComponent,
    ProductSizesComponent
  ],
  providers:[ProductsService],
  templateUrl: './product-modal.component.html',
  styleUrls: [
    './scss/product-modal.component.scss',
    './scss/product-modal.layout.scss'
  ]
})
export class ProductModalComponent {
  @Input() openModal: boolean = false;
  @Input() id!: number;
  @Output("toogle") onToggle = new EventEmitter();
  productData!: Product;
  currentImage: number = 0;

  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.productData = this.productService.selectProductById(this.id);
  }
  
  toggle() {
    this.onToggle.emit();
  }

  alterImage(numberImage: number) {
    this.currentImage = numberImage;
  }
}
