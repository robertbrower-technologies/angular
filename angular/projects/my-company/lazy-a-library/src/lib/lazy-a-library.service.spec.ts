import { TestBed } from '@angular/core/testing';

import { LazyALibraryService } from './lazy-a-library.service';

describe('LazyALibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyALibraryService = TestBed.get(LazyALibraryService);
    expect(service).toBeTruthy();
  });
});
