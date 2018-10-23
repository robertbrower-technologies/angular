import { TestBed } from '@angular/core/testing';

import { LazyBLibraryService } from './lazy-b-library.service';

describe('LazyBLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyBLibraryService = TestBed.get(LazyBLibraryService);
    expect(service).toBeTruthy();
  });
});
