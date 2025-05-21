import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu-responsive',
    templateUrl: './menu-responsive.component.html',
    styleUrls: ['./menu-responsive.component.scss'],
    standalone: false
})
export class MenuResponsiveComponent implements OnInit{
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
  ];
  ejemplosItems = [
    { name: 'Botones', link: '/buttons' },
    { name: 'Cards', link: '/cards' },
    { name: 'My Menu', link: '/mymenu' },
    { name: 'My Form', link: '/myform' },
    { name: 'LoginForm', link: '/login' },
    { name: 'My Mat Menu', link: '/matmenu' },
    { name: 'My Top Menu', link: '/topmatmenu' },
    { name: 'Usa Componente', link: '/usa' },
    { name: 'Menu Responsive', link: '/responsive' },
    { name: 'DataTable', link: '/datatable' },
  ]

  shouldShowMenu: boolean = false;

  ngOnInit() {
    this.shouldShowMenu = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.shouldShowMenu = event.target.innerWidth < 768;
  }

  onMenuClosed() {
    // Cerramos el menú programáticamente al hacer clic en un enlace del menú desplegable.
    const menuTrigger = document.querySelector('.menu-button') as HTMLElement;
    menuTrigger.click();
  }
}
