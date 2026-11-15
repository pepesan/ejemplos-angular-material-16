import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { isCompactMenu } from './menu-responsive.helpers';

@Component({
    selector: 'app-menu-responsive',
    templateUrl: './menu-responsive.component.html',
    styleUrls: ['./menu-responsive.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
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
    this.shouldShowMenu = isCompactMenu(window.innerWidth);
  }

  @HostListener('window:resize')
  onResize() {
    this.shouldShowMenu = isCompactMenu(window.innerWidth);
  }

}
