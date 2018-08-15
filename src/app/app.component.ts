import { Component } from '@angular/core';
import { RegionCountryCurrencyLanguageService } from './region-country-currency-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-search';
  constructor(service: RegionCountryCurrencyLanguageService) {
    service.loadRouting();
  }
}
