import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filter: string, property: string): any[] {
    const result: any = [];
    if(!value || filter ==='' || property === ''){
      return value
    }
    value.forEach((i: any)=>{
      if(i[property].trim().toLowerCase().includes(filter.toLowerCase())){
        result.push(i)
      }
    })
    return result;
  }

}
