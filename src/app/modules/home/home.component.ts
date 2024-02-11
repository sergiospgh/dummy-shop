import { Component } from '@angular/core';
import { LoginFacade } from '@modules/login/facade/login.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: '$100',
      imagen: 'https://picsum.photos/id/100/200/300',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: '$200',
      imagen: 'https://picsum.photos/id/101/200/300',
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: '$300',
      imagen: 'https://picsum.photos/id/102/200/300',
    },
  ];

  constructor(private readonly loginFacade: LoginFacade) {}

  onAddToFavorites(producto: any) {
    console.log('producto', producto);
  }

  onLogOut() {
    this.loginFacade.logOut();
  }
}
