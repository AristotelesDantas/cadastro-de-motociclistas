import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ativ2Component } from './ativ2.component';

describe('Ativ2Component', () => {
  let component: Ativ2Component;
  let fixture: ComponentFixture<Ativ2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ativ2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ativ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
