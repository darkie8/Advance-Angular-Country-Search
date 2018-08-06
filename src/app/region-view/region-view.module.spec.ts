import { RegionViewModule } from './region-view.module';

describe('RegionViewModule', () => {
  let regionViewModule: RegionViewModule;

  beforeEach(() => {
    regionViewModule = new RegionViewModule();
  });

  it('should create an instance', () => {
    expect(regionViewModule).toBeTruthy();
  });
});
