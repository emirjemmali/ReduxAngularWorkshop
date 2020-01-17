import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatiereComponent} from './matiere/matiere.component';
import {AjoutMatiereComponent} from './ajout-matiere/ajout-matiere.component';

const routes: Routes = [
  { path: '', redirectTo: '/matiere', pathMatch: 'full' },
  { path: 'matiere', component: MatiereComponent },
  { path: 'ajout-matiere', component: AjoutMatiereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
