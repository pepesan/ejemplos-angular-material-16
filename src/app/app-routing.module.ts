import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "./components/buttons/buttons.component";
import {HomeComponent} from "./components/home/home.component";
import {CardsComponent} from "./components/cards/cards.component";
import {MyMenuComponent} from "./components/my-menu/my-menu.component";
import {MyFormComponent} from "./components/my-form/my-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {MyMatMenuComponent} from "./components/my-mat-menu/my-mat-menu.component";
import {TopMenuComponent} from "./components/top-menu/top-menu.component";
import {UsaComponent} from "./components/usa/usa.component";
import {MenuResponsiveComponent} from "./components/menu-responsive/menu-responsive.component";
import {AboutComponent} from "./components/about/about.component";
import {MyDataTableComponent} from "./components/my-data-table/my-data-table.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'mymenu', component: MyMenuComponent },
  { path: 'myform', component: MyFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'matmenu', component: MyMatMenuComponent },
  { path: 'topmatmenu', component: TopMenuComponent },
  { path: 'usa', component: UsaComponent },
  { path: 'responsive', component: MenuResponsiveComponent },
  { path: 'datatable', component: MyDataTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
