import { TestBed } from '@angular/core/testing';

import { ArticuloDivulgacionService } from './articulo-divulgacion.service';

describe('ArticuloDivulgacionService', () => {
  let service: ArticuloDivulgacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticuloDivulgacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
