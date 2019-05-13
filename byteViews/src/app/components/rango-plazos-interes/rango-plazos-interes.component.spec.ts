import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangoPlazosInteresComponent } from './rango-plazos-interes.component';

describe('RangoPlazosInteresComponent', () => {
  let component: RangoPlazosInteresComponent;
  let fixture: ComponentFixture<RangoPlazosInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangoPlazosInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangoPlazosInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
