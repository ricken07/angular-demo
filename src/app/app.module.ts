import { NgModule } from '@angular/core';
import {NgbModalModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AccueilleComponent } from './accueille/accueille.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import {AppRoutingModule} from './app-routing.module';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import {ProductService} from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AccueilleComponent,
    AjoutProduitComponent,
    ListProduitsComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    NgbAlertModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
