import { TestBed } from '@angular/core/testing';

import { FormasDeDesembolsoService } from './formas-de-desembolso.service';

describe('FormasDeDesembolsoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormasDeDesembolsoService = TestBed.get(FormasDeDesembolsoService);
    expect(service).toBeTruthy();
  });
});
