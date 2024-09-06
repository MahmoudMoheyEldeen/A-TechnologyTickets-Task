import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private _selectedLanguage = new BehaviorSubject<string>('ar');
  selectedLanguage$ = this._selectedLanguage.asObservable();
  constructor() {}

  setLanguage(lang: string) {
    this._selectedLanguage.next(lang);
  }

  getLanguage(): string {
    return this._selectedLanguage.value;
  }
}
