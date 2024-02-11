import { Component, EventEmitter, Output } from '@angular/core';
import { ROUTES } from '@shared/constants/routes.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() logOut = new EventEmitter<void>();

  Routes = ROUTES;

  constructor() {}

  onLogOut() {
    this.logOut.emit();
  }
}
