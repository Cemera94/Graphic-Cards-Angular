import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GraphicCardsComponent } from './graphic-cards/graphic-cards.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "graphiccards", component: GraphicCardsComponent},
  {path: "", redirectTo: "/home", pathMatch: "prefix"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
