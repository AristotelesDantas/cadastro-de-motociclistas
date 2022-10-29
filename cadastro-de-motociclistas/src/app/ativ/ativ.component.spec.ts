import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivComponent } from './ativ.component';

describe('AtivComponent', () => {
  let component: AtivComponent;
  let fixture: ComponentFixture<AtivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
