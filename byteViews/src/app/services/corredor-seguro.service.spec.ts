import { TestBed } from '@angular/core/testing';

import { CorredorSeguroService } from './corredor-seguro.service';

describe('CorredorSeguroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorredorSeguroService = TestBed.get(CorredorSeguroService);
    expect(service).toBeTruthy();
  });
});
