import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { CircleMenu1Component } from './components/circle-menu1/circle-menu1.component';
import { BookmenuComponent } from './components/bookmenu/bookmenu.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CircleMenu1Component,
    BookmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
