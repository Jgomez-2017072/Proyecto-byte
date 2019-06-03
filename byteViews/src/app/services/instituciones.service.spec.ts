import { TestBed } from '@angular/core/testing';

import { InstitucionesService } from './instituciones.service';

describe('InstitucionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstitucionesService = TestBed.get(InstitucionesService);
    expect(service).toBeTruthy();
  });
});
