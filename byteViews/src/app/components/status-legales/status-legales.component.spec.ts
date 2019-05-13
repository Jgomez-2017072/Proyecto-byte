import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLegalesComponent } from './status-legales.component';

describe('StatusLegalesComponent', () => {
  let component: StatusLegalesComponent;
  let fixture: ComponentFixture<StatusLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
