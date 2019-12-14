import { TestBed } from '@angular/core/testing';

import { CitasHospitalService } from './citas-hospital.service';

describe('CitasHospitalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitasHospitalService = TestBed.get(CitasHospitalService);
    expect(service).toBeTruthy();
  });
});
