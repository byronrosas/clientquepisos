import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtributoComponent } from './listar-atributo.component';

describe('ListarAtributoComponent', () => {
  let component: ListarAtributoComponent;
  let fixture: ComponentFixture<ListarAtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
