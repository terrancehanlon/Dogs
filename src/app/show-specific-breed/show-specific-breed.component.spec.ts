import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpecificBreedComponent } from './show-specific-breed.component';

describe('ShowSpecificBreedComponent', () => {
  let component: ShowSpecificBreedComponent;
  let fixture: ComponentFixture<ShowSpecificBreedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSpecificBreedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSpecificBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
