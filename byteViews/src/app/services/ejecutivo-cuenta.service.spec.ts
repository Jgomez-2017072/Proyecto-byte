import { TestBed } from '@angular/core/testing';

import { EjecutivoCuentaService } from './ejecutivo-cuenta.service';

describe('EjecutivoCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjecutivoCuentaService = TestBed.get(EjecutivoCuentaService);
    expect(service).toBeTruthy();
  });
});
