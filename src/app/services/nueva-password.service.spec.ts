import { TestBed } from '@angular/core/testing';

import { NuevaPasswordService } from './nueva-password.service';

describe('NuevaPasswordService', () => {
  let service: NuevaPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevaPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
