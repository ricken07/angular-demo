import { Injectable } from '@angular/core';
import {Product} from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private auth = false;
  private products: Product[] = [
    {id: 1, name: 'Samsung A12', description: 'Phone portable A', imageUrl: '', price: 500, },
    {id: 2, name: 'Samsung A20', description: 'Phone portable A', imageUrl: '', price: 600, },
    {id: 3, name: 'Samsung A20', description: 'Phone portable A', imageUrl: '', price: 3456, }
  ];
  constructor() { }
  getAllProducts(): Product[] {
    return this.products;
  }
  isLogin(): boolean {
    return this.auth;
  }
  login(): any {
    return new Promise(
      (resolve) => {
        setTimeout(
          () => {
            this.auth = true;
            resolve(true);
          }, 5000
        );
      }
    );
  }
  logout(): void {
    this.auth = false;
}
  addProduct(product: Product): string { return '';}
}
