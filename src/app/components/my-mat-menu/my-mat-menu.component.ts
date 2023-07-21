import { Component } from '@angular/core';

@Component({
  selector: 'app-my-mat-menu',
  templateUrl: './my-mat-menu.component.html',
  styleUrls: ['./my-mat-menu.component.scss']
})
export class MyMatMenuComponent {
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  closeSidenav() {
    // Aquí puedes agregar la lógica para cerrar el menú lateral
    // cuando se hace clic en uno de los enlaces.
    // Puedes usar una variable de estado para controlar el estado del menú.
    // En este ejemplo, simplemente mostraremos un mensaje en la consola.
    console.log('Menu closed.');
  }
}
