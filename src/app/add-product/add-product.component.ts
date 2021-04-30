import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  paramUrl = '';
  constructor(private routeSnap: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
