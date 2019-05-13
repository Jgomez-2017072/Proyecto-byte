import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinirCategoriasUsuariosComponent } from './definir-categorias-usuarios.component';

describe('DefinirCategoriasUsuariosComponent', () => {
  let component: DefinirCategoriasUsuariosComponent;
  let fixture: ComponentFixture<DefinirCategoriasUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinirCategoriasUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinirCategoriasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
