import { SingleCountryViewModule } from './single-country-view.module';

describe('SingleCountryViewModule', () => {
  let singleCountryViewModule: SingleCountryViewModule;

  beforeEach(() => {
    singleCountryViewModule = new SingleCountryViewModule();
  });

  it('should create an instance', () => {
    expect(singleCountryViewModule).toBeTruthy();
  });
});
