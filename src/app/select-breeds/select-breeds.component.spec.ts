import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBreedsComponent } from './select-breeds.component';

describe('SelectBreedsComponent', () => {
  let component: SelectBreedsComponent;
  let fixture: ComponentFixture<SelectBreedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBreedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
