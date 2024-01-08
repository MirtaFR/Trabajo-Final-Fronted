import { TestBed } from '@angular/core/testing';

import { NuevoModeloService } from './nuevo-modelo.service';

describe('NuevoModeloService', () => {
  let service: NuevoModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
