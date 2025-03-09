import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(value: Product[], isAscent: boolean): Product[] {
    if (isAscent) {
      // Tri par ordre croissant
      return value.sort((product1, product2) => product1.price - product2.price);
    } else {
      // Tri par ordre décroissant
      return value.sort((product1, product2) => product2.price - product1.price);
    }
  }

}
