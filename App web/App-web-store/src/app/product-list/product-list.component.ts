import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Template de site Web', price: 29.99 },
    { id: 2, name: 'Projet 3D', price: 49.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
