import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ButtonsComponent } from './components/buttons/buttons.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import {MatDividerModule} from "@angular/material/divider";
import {ImportAngularModule} from "./modules/import-angular/import-angular.module";
import { CardsComponent } from './components/cards/cards.component';
import { MyMenuComponent } from './components/my-menu/my-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MenuComponent,
    HomeComponent,
    CardsComponent,
    MyMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImportAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
