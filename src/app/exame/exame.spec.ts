import {Exame} from './exame';

describe('Exame', () => {
  it('should create an instance', () => {
    expect(new Exame(null ,null, null, null)).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
  let exame = new Exame(1, '27/10/2018', 100, '28/10/2018');
  expect(exame.dataExame).toEqual('27/10/2018');
  expect(exame.valor).toEqual(100.00);
  expect(exame.dataResultado).toEqual('28/10/2018');
  });
});
