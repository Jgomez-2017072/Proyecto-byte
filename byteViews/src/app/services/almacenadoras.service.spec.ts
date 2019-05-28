import { TestBed } from '@angular/core/testing';

import { AlmacenadorasService } from './almacenadoras.service';

describe('AlmacenadorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlmacenadorasService = TestBed.get(AlmacenadorasService);
    expect(service).toBeTruthy();
  });
});
