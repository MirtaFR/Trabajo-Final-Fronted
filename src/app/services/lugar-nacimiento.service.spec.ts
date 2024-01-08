import { TestBed } from '@angular/core/testing';

import { LugarNacimientoService } from './lugar-nacimiento.service';

describe('LugarNacimientoService', () => {
  let service: LugarNacimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugarNacimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
