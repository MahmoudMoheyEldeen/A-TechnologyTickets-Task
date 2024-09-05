import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    SearchPipe,
    CommonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  searchWord: string = '';
  constructor(private _searchService: SearchService) {}
  ngOnInit(): void {
    this._searchService.getSearch().subscribe((word) => {
      this.searchWord = word;
      console.log('this is search word from table', this.searchWord);
    });
  }
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '2000',
      code: 'fasdasdh0g3',
      name: 'nomaro side',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 200,
      category: 'Accessories',
      quantity: 25,
      inventoryStatus: 'not',
      rating: 3,
    },
  ];
}
