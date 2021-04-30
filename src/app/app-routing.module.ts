import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilleComponent} from './accueille/accueille.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import {ListProduitsComponent} from './list-produits/list-produits.component';

const routes: Routes = [
  {path: '', component: AccueilleComponent},
  {path: 'ajouter-produit', component: AjoutProduitComponent},
  {path: 'liste-produits', component: ListProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
