import { TestBed, inject } from '@angular/core/testing';

import { MedicoService } from './medico.service';

describe('MedicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicoService]
    });
  });

  it('should ...', inject([MedicoService], (service: MedicoService) => {
    expect(service).toBeTruthy();
  }));
});
