import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './graphic-cards/pagination/pagination.component';
import { CommentsComponent } from './graphic-cards/comments/comments.component';
import { GraphicCardsItemComponent } from './graphic-cards/graphic-cards-item/graphic-cards-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraphicCardsComponent,
    PaginationComponent,
    CommentsComponent,
    GraphicCardsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
