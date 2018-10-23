import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyALibraryComponent } from './lazy-a-library.component';

describe('LazyALibraryComponent', () => {
  let component: LazyALibraryComponent;
  let fixture: ComponentFixture<LazyALibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyALibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyALibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
