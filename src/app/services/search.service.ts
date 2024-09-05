import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<string>();

  setSearch(searchWord: string) {
    this.searchSubject.next(searchWord);
  }
  getSearch(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
