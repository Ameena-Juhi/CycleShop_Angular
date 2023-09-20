import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): number {

    const currentDate = new Date();

    if(value.getMonth()< currentDate.getMonth()){
      return currentDate.getFullYear()-value.getFullYear();
    }
    else{
    return currentDate.getFullYear()-value.getFullYear()-1;
    }

  }

}
