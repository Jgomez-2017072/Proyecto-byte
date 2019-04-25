import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosContactoComponent } from './medios-contacto.component';

describe('MediosContactoComponent', () => {
  let component: MediosContactoComponent;
  let fixture: ComponentFixture<MediosContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediosContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
