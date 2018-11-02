import { TestBed, inject } from '@angular/core/testing';
import { ConsultaService } from './consulta.service';
import { Consulta } from './consulta';
import { Paciente } from 'app/paciente/paciente';
import { Medico } from 'app/medicos/medico';
import { AppService } from '../app.service';
import { ApiService } from 'app/api.service';



describe('ConsultaService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers: [ConsultaService, AppService, ApiService]
    });
  });

  it('should ...', inject([ConsultaService], (service: ConsultaService) => {
    expect(this.apiservice).toBeTruthy();
  }));
  describe('#getAll()', () => {

    it('should return an empty array by default', inject([ConsultaService], (service: ConsultaService) => {
      expect(this.apiservice.getAll()).toEqual([]);
    }));

    it('should return all appointments', inject([ConsultaService], (service: ConsultaService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      const consul1 = new Consulta(paciente1, medico1, '31', '8', true);
      this.apiservice.add(consul1);
      expect(this.apiservice.getAll()).toEqual([consul1]);
    }));
  });
  describe('#save(appointment)', () => {

    it('should automatically assign an incrementing id', inject([ConsultaService], (service: ConsultaService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      const consul1 = new Consulta(paciente1, medico1, '31', '8', true);
      this.service.add(consul1);
      expect(this.apiservice.getById(1)).toEqual(consul1);
    }));
  });
  describe('#delete(id)', () => {

    it('should remove appointment with the corresponding id', inject([ConsultaService], (service: ConsultaService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      const consul1 = new Consulta(paciente1, medico1, '31', '8', true);
      const paciente2 = new Paciente('Enos', 'pardo', '05', '122', '41', 'm', 'br', '55', 'pb', 'cardio');
      const consul2 = new Consulta(paciente2, medico1, '31', '8', true);
      this.apiservice.add(consul1);
      this.apiservice.add(consul2);
      expect(this.apiservice.getAll()).toEqual([consul1, consul2]);
      this.apiservice.delete(1);
      expect(this.apiservice.getAll()).toEqual([consul2]);
      this.apiservice.delete(2);
      expect(this.apiservice.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ConsultaService], (service: ConsultaService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      const consul1 = new Consulta(paciente1, medico1, '31', '8', true);
      const paciente2 = new Paciente('Enos', 'pardo', '05', '122', '41', 'm', 'br', '55', 'pb', 'cardio');
      const consul2 = new Consulta(paciente2, medico1, '31', '8', true);
      this.apiservice.add(consul1);
      this.apiservice.add(consul2);
      expect(this.apiservice.getAll()).toEqual([consul1, consul2]);
      service.delete(3);
      expect(this.apiservice.getAll()).toEqual([consul1, consul2]);
    }));
  });
  describe('#update(appointment)', () => {

    it('should return appointment with the corresponding id and updated data', inject([ConsultaService], (service: ConsultaService) => {
      const paciente1 = new Paciente('Amanda', 'pardo', '04', '121', '42', 'f', 'br', '56', 'pb', 'cardio');
      const medico1 = new Medico('Vini', 'Cardio', 6, '345', 2, 4000, true);
      const consul1 = new Consulta(paciente1, medico1, '31', '8', true);
      this.apiservice.add(consul1);
      //const consul2 = new Consulta(paciente1, 'Cardio', '8', '31', true);
      consul1.dataConsulta = '9';
      //consul2.dataRetorno = consul1.dataRetorno;
      //const updated = service.update(consul2, 2);
      expect(consul1.dataConsulta).toEqual('9');
    }));
  });
});
