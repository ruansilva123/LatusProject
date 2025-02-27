import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() sizes!: string[];
  @Input() imageRoot!: string;
}