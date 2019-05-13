import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeDeduccionesComponent } from './tipos-de-deducciones.component';

describe('TiposDeDeduccionesComponent', () => {
  let component: TiposDeDeduccionesComponent;
  let fixture: ComponentFixture<TiposDeDeduccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDeDeduccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeDeduccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
