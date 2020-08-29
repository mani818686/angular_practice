import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
 { path:"",component:HomeComponent},{path:"nav",component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
