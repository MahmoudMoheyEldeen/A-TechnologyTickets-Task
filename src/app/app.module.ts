import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketChartComponent } from './ticket-chart/ticket-chart.component';
import { TicketComponent } from './ticket/ticket.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TicketChartComponent,
    TicketComponent,
    TableComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
