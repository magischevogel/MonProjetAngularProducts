import { Injectable } from '@angular/core';
import { IProduct } from '../domain/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getAllProducts(): IProduct[] {
    return [
      {productID : 'P100', productName: 'Café', productPrice : 2.5},
      {productID : 'P200', productName: 'Thé', productPrice : 4.6},
      {productID : 'P300', productName: 'Jus d\'orange', productPrice : 3.5},
      {productID : 'P400', productName: 'Coca Cola', productPrice : 6.4}
    ];
  }
}
