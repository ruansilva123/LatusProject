import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-sizes',
  imports: [],
  templateUrl: './product-sizes.component.html',
  styleUrl: './product-sizes.component.scss'
})
export class ProductSizesComponent {
  @Input() sizes!: string[];
}
