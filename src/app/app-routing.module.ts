import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TicketChartComponent } from './ticket-chart/ticket-chart.component';
import { TicketComponent } from './ticket/ticket.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Default route for the dashboard
  { path: 'chart', component: TicketChartComponent }, // Route for the chart
  { path: 'ticket', component: TicketComponent }, // Route for a single ticket
  { path: 'table', component: TableComponent }, // Route for the table view
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
