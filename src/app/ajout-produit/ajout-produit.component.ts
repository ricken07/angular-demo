import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductService} from '../services/product.service';
import {Product} from '../model/Product';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public addProduct(productForm: NgForm): void {
    this.productService.addProduct(productForm.value)
      .subscribe(
        (response: Product) => {
          console.log(response);
          productForm.resetForm();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
