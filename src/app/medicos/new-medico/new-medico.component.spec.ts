import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMedicoComponent } from './new-medico.component';

describe('NewMedicoComponent', () => {
  let component: NewMedicoComponent;
  let fixture: ComponentFixture<NewMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
