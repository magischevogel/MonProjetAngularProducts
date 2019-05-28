import { Injectable } from '@angular/core';
import { IProduct } from '../domain/IProduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable <IProduct[]> {
    // return [
    //   {productID : 'P100', productName: 'Café', productPrice : 2.5},
    //   {productID : 'P200', productName: 'Thé', productPrice : 4.6},
    //   {productID : 'P300', productName: 'Jus d\'orange', productPrice : 3.5},
    //   {productID : 'P400', productName: 'Coca Cola', productPrice : 6.4}
    // ];
    return this.httpClient.get<IProduct[]>(this.URL);
  }
}
