import { TestBed, inject } from '@angular/core/testing';

import { BulkorderService } from './bulkorder.service';

describe('BulkorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BulkorderService]
    });
  });

  it('should be created', inject([BulkorderService], (service: BulkorderService) => {
    expect(service).toBeTruthy();
  }));
});
