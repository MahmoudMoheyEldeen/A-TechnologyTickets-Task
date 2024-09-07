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
import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicketChartComponent,
    TicketComponent,
    TableComponent,
    ReactiveFormsModule,
    FormsModule,
    InputSwitchModule,
    HttpClientModule,
    TranslocoRootModule,
    TranslocoDirective,
    TranslocoPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
