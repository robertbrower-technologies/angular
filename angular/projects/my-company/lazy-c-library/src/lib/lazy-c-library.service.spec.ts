import { TestBed } from '@angular/core/testing';

import { LazyCLibraryService } from './lazy-c-library.service';

describe('LazyCLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyCLibraryService = TestBed.get(LazyCLibraryService);
    expect(service).toBeTruthy();
  });
});
