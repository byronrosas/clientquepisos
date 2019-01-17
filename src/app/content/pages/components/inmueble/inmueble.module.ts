import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from './../../../partials/partials.module';

import { ListarOperacionComponent } from './operacion/listar-operacion/listar-operacion.component';
import { EditarOperacionComponent } from './operacion/editar-operacion/editar-operacion.component';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { EditarCategoriaComponent } from './categoria/editar-categoria/editar-categoria.component';
import { ListarTipoComponent } from './tipo/listar-tipo/listar-tipo.component';
import { EditarTipoComponent } from './tipo/editar-tipo/editar-tipo.component';
import { EditarAtributoComponent } from './atributo/editar-atributo/editar-atributo.component';
import { ListarAtributoComponent } from './atributo/listar-atributo/listar-atributo.component';
import { ListarAtributoTipoOperacionComponent } from './AtributoTipoOperacion/listar-atributo-tipo-operacion/listar-atributo-tipo-operacion.component';
import { EditarAtributoTipoOperacionComponent } from './AtributoTipoOperacion/editar-atributo-tipo-operacion/editar-atributo-tipo-operacion.component';
import { InmuebleComponent } from './inmueble.component';
import {ComponentesGenerales} from './componentes-generales'
//servicios
import {OperacionService} from './_core/servicios/operacion.service';
import {HttpUtilsService} from './_core/utils/http-utils.service';
import{LayoutUtilsService} from './_core/utils/layout-utils.service';
// import { HttpModule } from '@angular/http';
// import {HttpClientModule} from '@angular/common/http';


// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    ComponentesGenerales,
    MatInputModule,
	HttpClientModule,
	// HttpModule,
	PartialsModule,
	FormsModule,
	ReactiveFormsModule,
	TranslateModule.forChild(),
	MatButtonModule,
	MatMenuModule,
	MatSelectModule,
    MatInputModule,
	MatTableModule,
	MatAutocompleteModule,
	MatRadioModule,
	MatIconModule,
	MatNativeDateModule,
	MatProgressBarModule,
	MatDatepickerModule,
	MatCardModule,
	MatPaginatorModule,
	MatSortModule,
	MatCheckboxModule,
	MatProgressSpinnerModule,
	MatSnackBarModule,
	MatTabsModule,
	MatTooltipModule,
  ],
  providers: [
	HttpUtilsService,OperacionService,LayoutUtilsService
	],
  declarations: [ListarOperacionComponent, EditarOperacionComponent,
    ListarCategoriaComponent, EditarCategoriaComponent,
    ListarTipoComponent, EditarTipoComponent, EditarAtributoComponent,
    ListarAtributoComponent, ListarAtributoTipoOperacionComponent,
	EditarAtributoTipoOperacionComponent, InmuebleComponent]
	
})
export class InmuebleModule { }
