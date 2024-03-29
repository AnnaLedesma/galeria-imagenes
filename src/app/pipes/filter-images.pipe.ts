import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterImages'
})
export class FilterImagesPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultFilter = [];

    if (arg !== '') {      
      for (const filter of value) {
        if (filter.id == arg || `${filter.text}`.toLowerCase().indexOf(arg.toLowerCase()) > -1)
          resultFilter.push(filter)
      } 
      return resultFilter

    } else {
      return value
    }

  }

}