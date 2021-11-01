import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined; //Pai para filho
  @Output() notify = new EventEmitter(); //Filho para pai

  constructor() {}

  ngOnInit() {}
}
