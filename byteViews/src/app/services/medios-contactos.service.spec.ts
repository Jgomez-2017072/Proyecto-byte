import { TestBed } from '@angular/core/testing';

import { MediosContactosService } from './medios-contactos.service';

describe('MediosContactosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediosContactosService = TestBed.get(MediosContactosService);
    expect(service).toBeTruthy();
  });
});
