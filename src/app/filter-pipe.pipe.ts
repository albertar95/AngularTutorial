import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, searchExp: any): any {
    const result = [];
    for (const item of value) {
      if (item === searchExp)
        result.push(value);
    }
    return result;
  }

}
