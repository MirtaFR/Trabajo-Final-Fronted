import { TestBed } from '@angular/core/testing';

import { RecuperacionPasswordService } from './recuperacion-password.service';

describe('RecuperacionPasswordService', () => {
  let service: RecuperacionPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperacionPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
