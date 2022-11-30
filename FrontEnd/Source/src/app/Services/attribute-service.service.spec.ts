import { TestBed } from '@angular/core/testing';

import { AttributeServiceService } from './attribute-service.service';

describe('AttributeServiceService', () => {
  let service: AttributeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
