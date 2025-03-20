import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirect-button',
  imports: [],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.scss'
})
export class RedirectButtonComponent {
  @Input() text: string = "WhatsApp";
  @Input() iconRoot!: string;
  @Input() isModalButton: boolean = false;
  // @Input() link!: string;
}