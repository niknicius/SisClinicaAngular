import { TestBed, inject } from '@angular/core/testing';

import { MedicoService } from './medico.service';
import { Medico } from './medico';

describe('MedicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicoService]
    });
  });

  it('should ...', inject([MedicoService], (service: MedicoService) => {
    expect(service).toBeTruthy();
  }));
  describe('#getAll()', () => {

    it('should return an empty array by default', inject([MedicoService], (service: MedicoService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all doctors', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      service.add(medico1);
      expect(service.getAll()).toEqual([medico1]);
    }));
  });
  describe('#save(doctor)', () => {

    it('should automatically assign an incrementing id', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      service.add(medico1);
      expect(service.getById(1)).toEqual(medico1);
    }));
  });
  describe('#delete(id)', () => {

    it('should remove doctor with the corresponding id', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);      
      const medico2 = new Medico('Edu', 'Gastro', 7, '346', 1, 4000, true);
      service.add(medico1);
      service.add(medico2);
      expect(service.getAll()).toEqual([medico1, medico2]);
      service.delete(1);
      expect(service.getAll()).toEqual([medico2]);
      service.delete(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);      
      const medico2 = new Medico('Edu', 'Gastro', 7, '346', 1, 4000, true);
      service.add(medico1);
      service.add(medico2);
      expect(service.getAll()).toEqual([medico1, medico2]);
      service.delete(3);
      expect(service.getAll()).toEqual([medico1, medico2]);
    }));
  });
  describe('#update(doctor)', () => {

    it('should return patient updated data', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      service.add(medico1);
      medico1.salaDeAtendimento = 3;
      expect(medico1.salaDeAtendimento).toEqual(2);
    }));
    it('should return null if todo is not found', inject([MedicoService], (service: MedicoService) => {
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      service.add(medico1);
      const medico2 = new Medico('Edu', 'Gastro', 7, '346', 1, 4000, true);
      medico2.id = 3;
      const updated = service.update(medico2, 3);
      expect(updated).toBeUndefined();
    }));
  });
});
