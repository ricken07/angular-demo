import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  @Input() product: Product;
  @Output() productDelete = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  public deleteProduct(product: Product): void {
    this.productDelete.emit(product);
  }
}
