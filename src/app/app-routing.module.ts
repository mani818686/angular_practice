import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [
 { path:"",component:HomeComponent},{path:"nav",component:NavComponent},{path:"countries",component:CountryComponent},
 {path:"user",component:UserComponent},{path:"color",component:ColorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
