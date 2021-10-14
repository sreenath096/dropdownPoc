import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() {    
   }

  ngOnInit(): void {
  }

  @Input()
  product!: Product;

  @Output()
  notify = new EventEmitter<string>();

  notifyAlert(data: string){
    this.notify.emit(data);
  }
}
