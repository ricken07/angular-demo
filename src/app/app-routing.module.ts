import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import {HomeComponent} from './home/home.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {Error404Component} from './error404/error404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'products', component: ListProductComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
