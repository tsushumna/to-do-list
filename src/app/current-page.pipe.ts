import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentPage',
  pure: false
})
export class CurrentPagePipe implements PipeTransform {

  transform(totalList, pageNumber): any {
    if (totalList && pageNumber) {
      return totalList.slice((pageNumber - 1) * 10, pageNumber * 10);
    }
  }

}
