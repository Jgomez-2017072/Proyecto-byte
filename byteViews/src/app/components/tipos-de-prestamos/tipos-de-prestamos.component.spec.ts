import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDePrestamosComponent } from './tipos-de-prestamos.component';

describe('TiposDePrestamosComponent', () => {
  let component: TiposDePrestamosComponent;
  let fixture: ComponentFixture<TiposDePrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposDePrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDePrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
