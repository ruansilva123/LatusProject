import { Component } from '@angular/core';
import { RedirectButtonComponent } from '../../components/redirect-button/redirect-button.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

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

}
