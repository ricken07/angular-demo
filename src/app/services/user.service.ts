import { Injectable } from '@angular/core';
import {ProductService} from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private productService: ProductService) { }
}
