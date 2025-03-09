import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: Product | undefined;
  isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getAllProducts().subscribe((obtainedProducts: Product[]) => {
      this.product = obtainedProducts.filter((obtainedProduct: Product) => obtainedProduct.id === id)[0];
      this.isLoaded = true;
    });
  }
}
