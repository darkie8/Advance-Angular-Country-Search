import { TestBed, inject } from '@angular/core/testing';

import { RegionCountryCurrencyLanguageService } from './region-country-currency-language.service';

describe('RegionCountryCurrencyLanguageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionCountryCurrencyLanguageService]
    });
  });

  it('should be created', inject([RegionCountryCurrencyLanguageService], (service: RegionCountryCurrencyLanguageService) => {
    expect(service).toBeTruthy();
  }));
});
