import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-my-mat-menu',
    templateUrl: './my-mat-menu.component.html',
    styleUrls: ['./my-mat-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MyMatMenuComponent {
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
  ];

}
