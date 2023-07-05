import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchThis'
})
export class SearchThisPipe implements PipeTransform {

  transform(value: any, SearchExp: string): any {
    const result = [];
    if (SearchExp.length === 0)
      return value;
    for (const item of value) {
      if (item.includes(SearchExp))
        result.push(item);
    }
    return result;
  }

}
