import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../model/Product';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  public products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(): void {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      }
    );
  }

  public deleteProduct(product: Product): void {
    console.log('handle event');
    console.log(product);
    this.productService.deleteProduct(product.id).subscribe(
      (response: string) => {
        console.log(response);
        this.products = this.products.filter((p) => p.id !== product.id);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
