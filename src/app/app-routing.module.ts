import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { StagesComponent } from './stages/stages.component';
import { StrategiesComponent } from './strategies/strategies.component';

const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'stages', component: StagesComponent},
    { path: 'strategies', component: StrategiesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [
  HomeComponent,
  StagesComponent,
  StrategiesComponent
  ];