import { Component } from '@angular/core';
import { SearchService } from './services/search.service';
import { TranslationService } from './services/translation.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLanguage: string = '';
  title = 'A-TechnologyTickets-Task';
  constructor(
    private _searchService: SearchService,
    private _trans: TranslationService,
    private _transLoco: TranslocoService
  ) {
    this._trans.selectedLanguage$.subscribe((lang) => {
      this.selectedLanguage = lang;
      this._transLoco.setActiveLang(lang);
    });
  }

  search(search: string) {
    this._searchService.setSearch(search);
  }

  onLangChange(event: any) {
    const selectedlang = event.target.value;
    this._trans.setLanguage(selectedlang);
    console.log('selected lang is', selectedlang);
  }
}
