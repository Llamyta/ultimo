import { TestBed } from '@angular/core/testing';

import { SolicitudOrganosService } from './solicitud-organos.service';

describe('SolicitudOrganosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudOrganosService = TestBed.get(SolicitudOrganosService);
    expect(service).toBeTruthy();
  });
});
