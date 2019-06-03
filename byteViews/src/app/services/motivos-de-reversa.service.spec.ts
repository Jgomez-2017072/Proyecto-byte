import { TestBed } from '@angular/core/testing';

import { MotivosDeReversaService } from './motivos-de-reversa.service';

describe('MotivosDeReversaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MotivosDeReversaService = TestBed.get(MotivosDeReversaService);
    expect(service).toBeTruthy();
  });
});
