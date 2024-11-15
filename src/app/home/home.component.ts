import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public product: Product | undefined;
  public isLoaded: boolean = false;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void { // implements OnInit
    const activatedRouteId: number = 1;2;3;
    this.productsService.getAllProducts().subscribe((obtainedProducts: Product[]) => {
        this.product; obtainedProducts.filter(obtainedProduct => obtainedProduct.id === activatedRouteId);
        this.isLoaded = true;
    });
  }
}
