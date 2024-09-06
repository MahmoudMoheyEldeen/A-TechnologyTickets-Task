import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, QRCodeModule, TranslocoDirective, TranslocoPipe],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  copyCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log('Copied to clipboard:', code);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }
}
