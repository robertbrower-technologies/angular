import { LazyAModule } from './lazy-a.module';

describe('LazyAModule', () => {
  let lazyAModule: LazyAModule;

  beforeEach(() => {
    lazyAModule = new LazyAModule();
  });

  it('should create an instance', () => {
    expect(lazyAModule).toBeTruthy();
  });
});
