import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercamientoComponent } from './acercamiento.component';

describe('AcercamientoComponent', () => {
  let component: AcercamientoComponent;
  let fixture: ComponentFixture<AcercamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
