import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketChartComponent } from './ticket-chart/ticket-chart.component';
import { TicketComponent } from './ticket/ticket.component';
import { TableComponent } from './table/table.component';
import { SearchPipe } from './search.pipe';
import { SearchService } from './services/search.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HttpClientModule } from '@angular/common/http';

// Import Transloco and its modules
import {
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco'; // Adjust based on your Transloco package path
import { TranslocoHttpLoader } from './transloco-loader'; // Custom loader

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule,
    HttpClientModule,
    TranslocoModule, // Import TranslocoModule
    TranslocoDirective,
    TranslocoPipe,
    TicketChartComponent,
    TicketComponent,
    TableComponent,
    SearchPipe,
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ['ar', 'en'], // Add your available languages here
        defaultLang: 'ar', // Set your default language
        fallbackLang: 'ar', // Fallback language if the translation is missing
        reRenderOnLangChange: true, // Re-render the component when language changes
        prodMode: true, // Set to true in production
      },
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader, // Use your custom loader to load translations
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
