import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/IProduct';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private service: ProductsService) {}   // Constructor Injection

  ngOnInit(): void { // LifeCycle method that runs immediately after the constructor
    this.service.getAllProducts().subscribe(
      resp => this.products = resp,
      erreur => console.log('LOG: ATTENTION il ya eu l\'erreur : ' + erreur)
    );
  }

}
