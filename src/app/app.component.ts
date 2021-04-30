import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from './services/product.service';
import {Product} from './models/Product';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs-compat/add/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Nos produits';
  myColor = 'green';
  name?: string;
  products?: Product[];
  isLogin?: boolean;
  compteurSubscription: Subscription = new Subscription();
  handlerEvent(name: string): void {
    this.name = name;
    console.log(this.name);
  }
  constructor(private productService: ProductService,
              private roure: Router) {
    this.products = this.productService.getAllProducts();
  }

  ngOnInit(): void {
    this.isLogin = this._isLogin();
  }
  _isLogin(): boolean {
    return this.productService.isLogin();
  }

  onLogout(): void {
    this.productService.logout();
    this.isLogin = this._isLogin();
    this.roure.navigate(['']);
    console.log(this.productService.isLogin());
  }

  onLogin(): void {
    this.productService.login();
    this.isLogin = this._isLogin();
    this.roure.navigate(['add-product']);
    console.log(this.productService.isLogin());
  }

  ngOnDestroy(): void {
    this.compteurSubscription.unsubscribe();
  }
}
