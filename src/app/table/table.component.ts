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

import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
import { PaginatorModule } from 'primeng/paginator';
import { FileSaverModule, FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from '../transloco-loader';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TranslocoModule,
    TranslocoDirective,
    TranslocoPipe,
    SearchPipe,
    CommonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    PaginatorModule,
    FileSaverModule,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['en', 'ar'],
        defaultLang: 'ar',
        fallbackLang: 'ar',
        reRenderOnLangChange: true,
      },
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader,
    },
  ],
})
export class TableComponent implements OnInit {
  searchWord: string = '';
  rowsPerPage: number = 4;
  constructor(
    private _http: HttpClient,
    private _searchService: SearchService,
    private _fileSave: FileSaverService
  ) {}
  ngOnInit(): void {
    this._searchService.getSearch().subscribe((word) => {
      this.searchWord = word;
      console.log('this is search word from table', this.searchWord);
    });
  }
  users: any[] = [
    {
      id: '1',
      name: 'احمد محمود',
      phone: '01012929213',
      image: 'assets/images/Group 1000009196.png',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '2',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'assets/images/Image-30.png',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '3',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'assets/images/Image-31.png',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '4',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'assets/images/Group 1000009196 (1).png',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '5',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'bamboo-watch.jpg',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '6',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'bamboo-watch.jpg',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '7',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'bamboo-watch.jpg',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '8',
      name: 'محمد الغريب',
      phone: '01012929213',
      image: 'bamboo-watch.jpg',
      ticketNo: 'C-101',
      ticketValue: '30$',
      cienmaName: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...',
      peopleNum: 1,
      buyingNo: 'مرة واحدة',
      ticket: 'تذكرة رقم 4',
    },
    {
      id: '9',
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

  downloadImage(imageUrl: string, imageName: string) {
    this._http.get(imageUrl, { responseType: 'blob' }).subscribe((blob) => {
      this._fileSave.save(blob, imageName);
    });
  }
}
