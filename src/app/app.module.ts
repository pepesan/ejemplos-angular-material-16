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
import { MyFormComponent } from './components/my-form/my-form.component';
import {MatInputModule} from "@angular/material/input";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MyMatMenuComponent } from './components/my-mat-menu/my-mat-menu.component';
import {MatListModule} from "@angular/material/list";
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { UsaComponent } from './components/usa/usa.component';
import { MenuResponsiveComponent } from './components/menu-responsive/menu-responsive.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MenuComponent,
    HomeComponent,
    CardsComponent,
    MyMenuComponent,
    MyFormComponent,
    LoginFormComponent,
    MyMatMenuComponent,
    TopMenuComponent,
    UsaComponent,
    MenuResponsiveComponent,
    AboutComponent
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
