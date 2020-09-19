import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { Product } from 'src/app/models/product'
import { send } from 'process';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Product[] = []
 
  constructor( private productService :ProductService, private msg : MessangerService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

}
