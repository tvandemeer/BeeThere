import { TestBed } from '@angular/core/testing';

import { MockbeeService } from './mockbee.service';

describe('MockbeeService', () => {
  let service: MockbeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockbeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
