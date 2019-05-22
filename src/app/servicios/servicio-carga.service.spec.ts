import { TestBed } from '@angular/core/testing';

import { ServicioCargaService } from './servicio-carga.service';

describe('ServicioCargaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioCargaService = TestBed.get(ServicioCargaService);
    expect(service).toBeTruthy();
  });
});
