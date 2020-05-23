import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})


@Injectable()
export class FilterByPipe implements PipeTransform {
  transform( array: Array<any>, filterField: string, filterValue: string ): Array<any> {
      if (!filterField || !filterValue) {
         return array;
      }
      if (!array) return [];
      return array.filter(item => item[filterField] == filterValue);
  }
}