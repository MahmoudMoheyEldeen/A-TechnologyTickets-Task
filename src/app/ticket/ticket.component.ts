import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, QRCodeModule],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  copyCode(code: string) {
    console.log('copied code', code);
  }
}
