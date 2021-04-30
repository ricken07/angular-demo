import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private products: Product[];
  private productSubject: Subject<Product[]>;
  constructor(private http: HttpClient) { }
  public emitProducts(): void {
    this.productSubject.next(this.products.slice());
  }
  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/product/add`, product);
  }
  public updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/product/update`, product);
  }
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product/`);
  }
  public getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${productId}`);
  }
  public deleteProduct(productId: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/product/${productId}`, {responseType: 'text'});
  }
  public initProducts(products: Product[]): void {this.products = products;}
}
