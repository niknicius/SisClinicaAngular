import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicosComponent } from './list-medicos.component';

describe('ListMedicosComponent', () => {
  let component: ListMedicosComponent;
  let fixture: ComponentFixture<ListMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
