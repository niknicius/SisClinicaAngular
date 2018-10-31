import { TestBed, inject } from '@angular/core/testing';

import { ExameService } from './exame.service';
import { Exame } from './exame';
import { AppService } from '../app.service';


describe('ExameService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, ExameService]
    });
  });
  it('should exist', inject([ExameService], (service: ExameService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAll()', () => {

    it('should return an empty array by default', inject([ExameService], (service: ExameService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all exames', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame('27/10/2018', 100.00, '28/10/2018');
      const exame2 = new Exame('27/10/2018', 100.00, '28/10/2018');
      service.add(Number,exame1);
      service.add(Number,exame2);
      expect(service.getAll()).toEqual([exame1, exame2]);
    }));
  });

  describe('#save(exames)', () => {

    it('should automatically assign an incrementing id', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame('27/10/2018', 100.00, '28/10/2018');
      const exame2 = new Exame('27/10/2018', 100.00, '28/10/2018');
      service.add(Number, exame1);
      service.add(Number,exame2);
      expect(service.getById(1)).toEqual(exame1);
      expect(service.getById(2)).toEqual(exame2);
    }));
  });


  describe('#update(exames)', () => {

    it('should return exames with the corresponding id and updated data', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame('27/10/2018', 100.00, '28/10/2018');
      service.add(Number, exame1);
      const exame2 = new Exame('27/10/2018', 100.00, '28/10/2018');
      const updated = service.update(exame2, Number,Number);
      expect(updated.dataExame).toEqual('27/10/2018');
      expect(updated.valor).toEqual(100.00);
      expect(updated.dataResultado).toEqual('28/10/2018');
    }));

    it('should return null if todo is not found', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame(1, 1, '27/10/2018', 100.00, '28/10/2018');
      service.add(exame1);
      const exame2 = new Exame(3, 1, '27/10/2018', 100.00, '28/10/2018');
      exame2.id = 3;
      const updated = service.update(exame2, exame2.id);
      expect(updated).toBeUndefined();
    }));
  });

});
