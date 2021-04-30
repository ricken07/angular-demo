import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  @Input() product: any;
  /*products = [
    {name: 'Samsung A12', price: 210, description: 'Phone portable'},
    {name: 'Samsung A20', price: 220, description: 'Phone portable'},
    {name: 'Samsung A30', price: 500, description: 'Phone portable'}
  ];
  registerDate = new Date();
  @Input() titre?: string;
  @Output() sendData = new EventEmitter<string>();
  showBtn = true;*/
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.titre);
    // this.sendData.emit(this.product.name);
  }

}
