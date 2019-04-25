import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoresPrestamoComponent } from './canal-distribucion.component';

describe('AsesoresPrestamoComponent', () => {
  let component: AsesoresPrestamoComponent;
  let fixture: ComponentFixture<AsesoresPrestamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoresPrestamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoresPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
