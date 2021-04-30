import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Input() produits: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
