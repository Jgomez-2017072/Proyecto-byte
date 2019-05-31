import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAutorizacionComponent } from './asignar-autorizacion.component';

describe('AsignarAutorizacionComponent', () => {
  let component: AsignarAutorizacionComponent;
  let fixture: ComponentFixture<AsignarAutorizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarAutorizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarAutorizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
