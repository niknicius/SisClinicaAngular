import { TestBed, inject } from '@angular/core/testing';
import { ExameService } from './exame.service';
import { Exame } from './exame';
import { AppService } from '../app.service';
import { ApiService } from 'app/api.service';



describe('ExameService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, ExameService, ApiService]
    });
  });
  it('should exist', inject([ExameService], (service: ExameService) => {
    expect(this.apiservice).toBeTruthy();
  }));

  describe('#getAll()', () => {

    it('should return an empty array by default', inject([ExameService], (service: ExameService) => {
      expect(this.apiservice.getAll(1)).toEqual([]);
    }));

    it('should return all exames', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame(1, '27/10/2018', 100, '28/10/2018');
      const exame2 = new Exame(2, '27/10/2018', 100, '28/10/2018');
      this.apiservice.add(Number,exame1);
      this.apiservice.add(Number,exame2);
      expect(this.apiservice.getAll(1)).toEqual([exame1, exame2]);
    }));
  });

  describe('#save(exames)', () => {

    it('should automatically assign an incrementing id', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame(1, '27/10/2018', 100, '28/10/2018');
      const exame2 = new Exame(2, '27/10/2018', 100, '28/10/2018');
      this.apiservice.add(Number, exame1);
      this.apiservice.add(Number,exame2);
      expect(this.apiservice.getById(1, 2)).toEqual(exame1, exame2);
    }));
  });


  describe('#update(exames)', () => {

    //it('should return exames with the corresponding id and updated data', inject([ExameService], (service: ExameService) => {
      //const exame1 = new Exame('27/10/2018', 100.00, '28/10/2018');
      //service.add(1, exame1);
      //const exame2 = new Exame('28/10/2018', 100.00, '29/10/2018');
      //const updated = service.update(exame2, 1, 2);
      //expect(updated.dataExame).toEqual('28/10/2018');
      //expect(updated.valor).toEqual(100.00);
      //expect(updated.dataResultado).toEqual('29/10/2018');
    //}));

    it('should return null if todo is not found', inject([ExameService], (service: ExameService) => {
      const exame1 = new Exame(1, '27/10/2018', 100, '28/10/2018');
      this.apiservice.add(Number ,exame1);
      const exame2 = new Exame(2, '27/10/2018', 100, '28/10/2018');
      const updated = this.apiservice.update(exame2, 1, 2);
      expect(updated).toBeUndefined();
    }));
  });

});
