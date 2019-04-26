import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajesDeFinanciamientoComponent } from './porcentajes-de-financiamiento.component';

describe('PorcentajesDeFinanciamientoComponent', () => {
  let component: PorcentajesDeFinanciamientoComponent;
  let fixture: ComponentFixture<PorcentajesDeFinanciamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentajesDeFinanciamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajesDeFinanciamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
