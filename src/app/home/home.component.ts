import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public products: Product[] = [];
  public isLoaded: boolean = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void { // implements OnInit
    this.productsService.getAllProducts().subscribe((obtainedProducts: Product[]) => {
        this.products = obtainedProducts;
        this.isLoaded = true;
    });
  }
}
