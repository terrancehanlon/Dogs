import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRecordsComponent } from './history-records.component';

describe('HistoryRecordsComponent', () => {
  let component: HistoryRecordsComponent;
  let fixture: ComponentFixture<HistoryRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
