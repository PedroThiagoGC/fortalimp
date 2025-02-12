import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {
  showButton = true;

  openWhatsApp(): void {
    window.open('https://wa.me/5585994334597', '_blank');
  }
}
