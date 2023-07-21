import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "./components/buttons/buttons.component";
import {HomeComponent} from "./components/home/home.component";
import {CardsComponent} from "./components/cards/cards.component";
import {MyMenuComponent} from "./components/my-menu/my-menu.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'mymenu', component: MyMenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
