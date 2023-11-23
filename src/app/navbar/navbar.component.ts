import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isNavbarLarge = true;
  isNavbarOpen = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isNavbarLarge = window.innerWidth >= 768;
    if (!this.isNavbarLarge) {
      this.isNavbarOpen = false;
    }
  }

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
    this.toggleNavbar();
  }

  navigateToProducts(): void {
    this.router.navigate(['/products']);
    this.toggleNavbar();
  }

  navigateToAbout(): void {
    this.router.navigate(['/about']);
    this.toggleNavbar();
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
    this.toggleNavbar();
  }

  navigateToSale(): void {
    this.router.navigate(['/sale']);
    this.toggleNavbar();
  }
}
