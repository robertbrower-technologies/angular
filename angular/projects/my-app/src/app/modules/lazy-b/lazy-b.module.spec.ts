import { LazyBModule } from './lazy-b.module';

describe('LazyBModule', () => {
  let lazyBModule: LazyBModule;

  beforeEach(() => {
    lazyBModule = new LazyBModule();
  });

  it('should create an instance', () => {
    expect(lazyBModule).toBeTruthy();
  });
});
