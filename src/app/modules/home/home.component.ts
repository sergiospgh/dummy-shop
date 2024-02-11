import { Component } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly loginFacade: LoginFacade) {}

  onLogOut() {
    this.loginFacade.logOut();
  }
}
