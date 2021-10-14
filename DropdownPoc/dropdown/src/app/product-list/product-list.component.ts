import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(data: string) {
    window.alert(data + ' You will be notified when the product goes on sale');
  }
}
