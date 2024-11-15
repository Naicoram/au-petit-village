import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
product: any;

}
