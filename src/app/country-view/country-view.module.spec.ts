import { CountryViewModule } from './country-view.module';

describe('CountryViewModule', () => {
  let countryViewModule: CountryViewModule;

  beforeEach(() => {
    countryViewModule = new CountryViewModule();
  });

  it('should create an instance', () => {
    expect(countryViewModule).toBeTruthy();
  });
});
