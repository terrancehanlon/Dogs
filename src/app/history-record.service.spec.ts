import { TestBed, inject } from '@angular/core/testing';

import { HistoryRecordService } from './history-record.service';

describe('HistoryRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryRecordService]
    });
  });

  it('should be created', inject([HistoryRecordService], (service: HistoryRecordService) => {
    expect(service).toBeTruthy();
  }));
});
