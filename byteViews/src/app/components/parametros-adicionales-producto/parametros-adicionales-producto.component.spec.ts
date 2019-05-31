import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrosAdicionalesProductoComponent } from './parametros-adicionales-producto.component';

describe('ParametrosAdicionalesProductoComponent', () => {
  let component: ParametrosAdicionalesProductoComponent;
  let fixture: ComponentFixture<ParametrosAdicionalesProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrosAdicionalesProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrosAdicionalesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
