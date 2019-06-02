import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoActivoCrediticioComponent } from './tipo-activo-crediticio.component';

describe('TipoActivoCrediticioComponent', () => {
  let component: TipoActivoCrediticioComponent;
  let fixture: ComponentFixture<TipoActivoCrediticioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoActivoCrediticioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoActivoCrediticioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
