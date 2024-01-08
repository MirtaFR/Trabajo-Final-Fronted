import { TestBed } from '@angular/core/testing';

import { SniService } from './sni.service';

describe('SniService', () => {
  let service: SniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
