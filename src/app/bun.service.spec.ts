import { TestBed } from '@angular/core/testing';

import { BunService } from './bun.service';

describe('BunService', () => {
  let service: BunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
