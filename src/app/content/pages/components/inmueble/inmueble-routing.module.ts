import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmuebleComponent } from './inmueble.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListarTipoComponent } from './tipo/listar-tipo/listar-tipo.component';
import { EditarTipoComponent } from './tipo/editar-tipo/editar-tipo.component';
import { ListarAtributoComponent } from './atributo/listar-atributo/listar-atributo.component';
import { EditarAtributoComponent } from './atributo/editar-atributo/editar-atributo.component';
import { EditarOperacionComponent } from './operacion/editar-operacion/editar-operacion.component';
import { ListarOperacionComponent } from './operacion/listar-operacion/listar-operacion.component';
import { EditarAtributoTipoOperacionComponent } from './AtributoTipoOperacion/editar-atributo-tipo-operacion/editar-atributo-tipo-operacion.component';
import { ListarAtributoTipoOperacionComponent } from './AtributoTipoOperacion/listar-atributo-tipo-operacion/listar-atributo-tipo-operacion.component';

const routes: Routes = [
{
  path: '',
  component: InmuebleComponent,
  children: [
    {
      path: '',
      redirectTo: 'listar-categoria',
      pathMatch: 'full'
    },
    {
      path: 'listar-categoria',
      component: ListarCategoriaComponent
    },
    
    {
      path: 'editar-categoria',
      component: EditarCategoriaComponent
    },
    {
      path: 'listar-tipo',
      component: ListarTipoComponent
    },
    {
      path: 'editar-tipo',
      component: EditarTipoComponent
    },
    {
      path: 'listar-atributo',
      component: ListarAtributoComponent
    },
    {
      path: 'editar-atributo',
      component: EditarAtributoComponent
    },
    {
      path: 'listar-operacion',
      component: ListarOperacionComponent
    },
    {
      path: 'listar-operacion/agregar',
      component: EditarOperacionComponent
    },
    {
      path: 'listar-operacion/editar',
      component: EditarOperacionComponent
    },
    {
      path: 'listar-operacion/editar/:id',
      component: EditarOperacionComponent
    },
    {
      path: 'editar-atributo-tipo-operacion',
      component: EditarAtributoTipoOperacionComponent
    },
    {
      path: 'listar-atributo-tipo-operacion',
      component: ListarAtributoTipoOperacionComponent
    }
  ]
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class InmuebleRoutingModule { }
