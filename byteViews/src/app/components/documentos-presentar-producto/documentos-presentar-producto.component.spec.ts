import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosPresentarProductoComponent } from './documentos-presentar-producto.component';

describe('DocumentosPresentarProductoComponent', () => {
  let component: DocumentosPresentarProductoComponent;
  let fixture: ComponentFixture<DocumentosPresentarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosPresentarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosPresentarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
