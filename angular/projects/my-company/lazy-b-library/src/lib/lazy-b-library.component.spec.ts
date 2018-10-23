import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyBLibraryComponent } from './lazy-b-library.component';

describe('LazyBLibraryComponent', () => {
  let component: LazyBLibraryComponent;
  let fixture: ComponentFixture<LazyBLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyBLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyBLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
