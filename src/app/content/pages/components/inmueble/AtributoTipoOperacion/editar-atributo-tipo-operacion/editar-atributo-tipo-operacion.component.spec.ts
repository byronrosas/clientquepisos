import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtributoTipoOperacionComponent } from './editar-atributo-tipo-operacion.component';

describe('EditarAtributoTipoOperacionComponent', () => {
  let component: EditarAtributoTipoOperacionComponent;
  let fixture: ComponentFixture<EditarAtributoTipoOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAtributoTipoOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAtributoTipoOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
