import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactSort'
})
export class ContactSortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
