import { Component } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A-TechnologyTickets-Task';
  constructor(private _searchService: SearchService) {}

  search(search: string) {
    this._searchService.setSearch(search);
  }
}
