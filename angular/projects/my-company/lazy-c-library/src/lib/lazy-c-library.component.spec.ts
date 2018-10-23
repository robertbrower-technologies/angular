import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCLibraryComponent } from './lazy-c-library.component';

describe('LazyCLibraryComponent', () => {
  let component: LazyCLibraryComponent;
  let fixture: ComponentFixture<LazyCLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
