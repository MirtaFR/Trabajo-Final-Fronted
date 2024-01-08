import { TestBed } from '@angular/core/testing';

import { DomicilioParticularService } from './domicilio-particular.service';

describe('DomicilioParticularService', () => {
  let service: DomicilioParticularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomicilioParticularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
