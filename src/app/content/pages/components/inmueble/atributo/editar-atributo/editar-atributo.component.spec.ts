import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAtributoComponent } from './editar-atributo.component';

describe('EditarAtributoComponent', () => {
  let component: EditarAtributoComponent;
  let fixture: ComponentFixture<EditarAtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
