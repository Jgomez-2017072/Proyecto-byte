import { TestBed } from '@angular/core/testing';

import { RecargosAdicionalesService } from './recargos-adicionales.service';

describe('RecargosAdicionalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecargosAdicionalesService = TestBed.get(RecargosAdicionalesService);
    expect(service).toBeTruthy();
  });
});
