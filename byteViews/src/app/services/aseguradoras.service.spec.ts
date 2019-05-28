import { TestBed } from '@angular/core/testing';

import { AseguradorasService } from './aseguradoras.service';

describe('AseguradorasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AseguradorasService = TestBed.get(AseguradorasService);
    expect(service).toBeTruthy();
  });
});
