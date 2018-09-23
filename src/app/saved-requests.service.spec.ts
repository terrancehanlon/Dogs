import { TestBed, inject } from '@angular/core/testing';

import { SavedRequestsService } from './saved-requests.service';

describe('SavedRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedRequestsService]
    });
  });

  it('should be created', inject([SavedRequestsService], (service: SavedRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
