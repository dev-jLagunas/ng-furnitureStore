import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToAccount(): void {
    this.router.navigate(['/account']);
  }
}
