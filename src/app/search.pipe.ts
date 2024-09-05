import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchWord: string): any[] {
    if (!items || !searchWord) {
      return items;
    }
    const lowerSearchWord = searchWord.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(lowerSearchWord)
    );
  }
}
