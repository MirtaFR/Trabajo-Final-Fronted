import { TestBed } from '@angular/core/testing';

import { RevistaIndexadoService } from './revista-indexado.service';

describe('RevistaIndexadoService', () => {
  let service: RevistaIndexadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevistaIndexadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
