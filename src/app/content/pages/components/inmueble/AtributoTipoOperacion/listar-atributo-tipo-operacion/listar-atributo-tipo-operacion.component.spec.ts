import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtributoTipoOperacionComponent } from './listar-atributo-tipo-operacion.component';

describe('ListarAtributoTipoOperacionComponent', () => {
  let component: ListarAtributoTipoOperacionComponent;
  let fixture: ComponentFixture<ListarAtributoTipoOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAtributoTipoOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtributoTipoOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
