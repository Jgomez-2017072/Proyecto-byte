import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosTransaccionComponent } from './parametros-transaccion.component';

describe('ParametrosTransaccionComponent', () => {
  let component: ParametrosTransaccionComponent;
  let fixture: ComponentFixture<ParametrosTransaccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosTransaccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
