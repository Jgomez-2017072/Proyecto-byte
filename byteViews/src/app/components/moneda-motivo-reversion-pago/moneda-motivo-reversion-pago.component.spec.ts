import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedaMotivoReversionPagoComponent } from './moneda-motivo-reversion-pago.component';

describe('MonedaMotivoReversionPagoComponent', () => {
  let component: MonedaMotivoReversionPagoComponent;
  let fixture: ComponentFixture<MonedaMotivoReversionPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonedaMotivoReversionPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonedaMotivoReversionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
