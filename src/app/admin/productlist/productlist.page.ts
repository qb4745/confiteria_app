import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductModel } from 'src/app/models/ProductModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductlistPage implements OnInit {

  products: ProductModel[] = [
    new ProductModel(1, 3001, 'Product A', 'Brand A', true),
    new ProductModel(2, 3002, 'Product B', 'Brand B', true),
    new ProductModel(3, 3003, 'Product C', 'Brand C', true),
    new ProductModel(4, 3004, 'Product D', 'Brand D', true),
    new ProductModel(5, 3005, 'Product E', 'Brand E', true),
    new ProductModel(6, 3006, 'Product F', 'Brand F', true),
    new ProductModel(7, 3007, 'Product G', 'Brand G', true),
    new ProductModel(8, 3008, 'Product H', 'Brand H', true),
    new ProductModel(9, 3009, 'Product I', 'Brand I', true),
    new ProductModel(10, 3010, 'Product J', 'Brand J', true)
];

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
