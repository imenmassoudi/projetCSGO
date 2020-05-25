import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjetComponent} from './classe/projet/projet.component';
import {AccueilComponent} from './visiteur/accueil/accueil.component';

const routes: Routes = [
  { path: 'projets', component: ProjetComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: '', redirectTo: 'accueil', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]


})
export class AppRoutingModule { }
