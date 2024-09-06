import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { TranslationService } from '../services/translation.service';
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, QRCodeModule, TranslocoDirective, TranslocoPipe],
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
  selectedLanguage: string = '';

  constructor(private _trans: TranslationService) {
    this._trans.selectedLanguage$.subscribe((lang) => {
      this.selectedLanguage = lang;
      console.log('from business component', this.selectedLanguage);
    });
  }
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
