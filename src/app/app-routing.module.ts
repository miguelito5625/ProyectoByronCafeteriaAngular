import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmenuComponent } from './components/bookmenu/bookmenu.component';
import { CircleMenu1Component } from './components/circle-menu1/circle-menu1.component';


const routes: Routes = [
  { path: 'bookmenu', component: BookmenuComponent },
  { path: '', component: CircleMenu1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
