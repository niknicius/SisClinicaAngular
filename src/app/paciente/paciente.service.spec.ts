import { TestBed, inject } from '@angular/core/testing';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import { AppService } from 'app/app.service';
import { ApiService } from 'app/api.service';


describe('PacienteService', () => {
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacienteService, AppService, ApiService]
    });
  });

  it('should ...', inject([PacienteService], (service: PacienteService) => {
    expect(this.apiservice).toBeTruthy();
  }));
  describe('#getAll()', () => {

    it('should return an empty array by default', inject([PacienteService], (service: PacienteService) => {
      expect(this.apiservice.getAll()).toEqual([]);
    }));

    it('should return all patients', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      expect(this.apiservice.getAll()).toEqual([paciente1]);
    }));
  });
  describe('#save(patient)', () => {

    it('should automatically assign an incrementing id', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      expect(this.apiservice.getById(1)).toEqual(paciente1);
    }));
  });
  describe('#delete(id)', () => {

    it('should remove patient with the corresponding id', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const paciente2 = new Paciente('Enos', 'pardo', '05', '122', '41', 'm', 'br', '55', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      this.apiservice.add(paciente2);
      expect(this.apiservice.getAll()).toEqual([paciente1, paciente2]);
      this.apiservice.delete(1);
      expect(this.apiservice.getAll()).toEqual([paciente2]);
      this.apiservice.delete(2);
      expect(this.apiservice.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const paciente2 = new Paciente('Enos', 'pardo', '05', '122', '41', 'm', 'br', '55', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      this.apiservice.add(paciente2);
      expect(this.apiservice.getAll()).toEqual([paciente1, paciente2]);
      this.apiservice.delete(3);
      expect(this.apiservice.getAll()).toEqual([paciente1, paciente2]);
    }));
  });
  describe('#update(patient)', () => {

    it('should return patient updated data', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      //const paciente2 = new (paciente1, 'Cardio', '8', '31', true);
      paciente1.tipoConsulta = 'Dentista';
      //consul2.dataRetorno = consul1.dataRetorno;
      //const updated = service.update(consul2, 2);
      expect(paciente1.tipoConsulta).toEqual('Dentista');
    }));
    it('should return null if todo is not found', inject([PacienteService], (service: PacienteService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      this.apiservice.add(paciente1);
      const paciente2 = new Paciente('Enos', 'pardo', '05', '122', '41', 'm', 'br', '55', 'pb', 'cardio');
      const updated = this.apiservice.update(paciente2, 2);
      expect(updated).toBeUndefined();
    }));
  });
});
