import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionDeCategoriasComponent } from './asignacion-de-categorias.component';

describe('AsignacionDeCategoriasComponent', () => {
  let component: AsignacionDeCategoriasComponent;
  let fixture: ComponentFixture<AsignacionDeCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionDeCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionDeCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
