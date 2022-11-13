import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPlacaComponent } from './consulta-placa.component';

describe('ConsultaPlacaComponent', () => {
  let component: ConsultaPlacaComponent;
  let fixture: ComponentFixture<ConsultaPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPlacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
