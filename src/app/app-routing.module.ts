import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmenuComponent } from './components/bookmenu/bookmenu.component';
import { CircleMenu1Component } from './components/circle-menu1/circle-menu1.component';
import { NewfoodformComponent } from './components/newfoodform/newfoodform.component';


const routes: Routes = [
  { path: '', component: BookmenuComponent },
  { path: 'agregarplatillo', component: NewfoodformComponent },
  // { path: '', component: CircleMenu1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
