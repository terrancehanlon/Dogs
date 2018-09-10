import { TestBed, inject } from '@angular/core/testing';

import { EndpointInfoService } from './endpoint-info.service';

describe('EndpointInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EndpointInfoService]
    });
  });

  it('should be created', inject([EndpointInfoService], (service: EndpointInfoService) => {
    expect(service).toBeTruthy();
  }));
});
