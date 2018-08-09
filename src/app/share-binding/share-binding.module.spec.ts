import { ShareBindingModule } from './share-binding.module';

describe('ShareBindingModule', () => {
  let shareBindingModule: ShareBindingModule;

  beforeEach(() => {
    shareBindingModule = new ShareBindingModule();
  });

  it('should create an instance', () => {
    expect(shareBindingModule).toBeTruthy();
  });
});
