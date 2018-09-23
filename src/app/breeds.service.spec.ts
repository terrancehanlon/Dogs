import { TestBed, inject } from '@angular/core/testing';

import { BreedsService } from './breeds.service';

describe('BreedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreedsService]
    });
  });

  it('should be created', inject([BreedsService], (service: BreedsService) => {
    expect(service).toBeTruthy();
  }));
});
