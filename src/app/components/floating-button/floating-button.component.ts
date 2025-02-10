import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.showButton = window.scrollY > 300;
  }

  openWhatsApp(): void {
    window.open('https://wa.me/5585994334597', '_blank');
  }
}
