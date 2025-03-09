import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: Product[], name: string): Product[] {
    return value.filter(product => product.name.toLowerCase().includes((name.toLowerCase())));
  }

}
