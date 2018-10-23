import { LazyCModule } from './lazy-c.module';

describe('LazyBModule', () => {
  let lazyBModule: LazyCModule;

  beforeEach(() => {
    lazyBModule = new LazyCModule();
  });

  it('should create an instance', () => {
    expect(lazyBModule).toBeTruthy();
  });
});
