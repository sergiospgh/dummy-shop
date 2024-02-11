import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '@shared/constants/routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() logOut = new EventEmitter<void>();

  constructor(private readonly router: Router) {}

  navigateToProducts() {
    this.router.navigate([ROUTES.PRODUCTS]);
  }

  navigateToFavorites() {
    this.router.navigate([ROUTES.FAVORITES]);
  }

  onLogOut() {
    this.logOut.emit();
  }
}
