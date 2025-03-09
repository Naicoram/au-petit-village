import { Component } from '@angular/core';
import { Product, ProductsService } from '../products.service';
import { SearchByNamePipe } from '../search-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    public products: Product[] = [];
    public productsFull: Product[] = [];
    public nameSearch: string = '';
    public isAscent = true;
  
    constructor(private productsService: ProductsService) {
    }
  
    ngOnInit(): void { // implements OnInit
      this.productsService.getAllProducts().subscribe((obtainedProducts: Product[]) => {
          this.products = obtainedProducts;
          this.productsFull = obtainedProducts;
      });
    }
  
    searchByName(): void {
      const searchByNamePipe = new SearchByNamePipe();
      this.products = searchByNamePipe.transform(this.productsFull, this.nameSearch);
    }
  
    sortByPrice(): void {
      const sortByPricePipe = new SortByPricePipe();
      this.products = sortByPricePipe.transform(this.products, this.isAscent);
      this.isAscent = !this.isAscent;
      // true -> true | false -> false | !true -> false | !false -> true
    }

}
