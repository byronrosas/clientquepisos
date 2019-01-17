import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { map, startWith} from 'rxjs/operators';
import{OperacionService} from '../../_core/servicios/operacion.service';
import { OperacionModel } from '../../_core/modelos/operacion.model';
import { LayoutUtilsService,MessageType  } from '../../_core/utils/layout-utils.service';


@Component({
  selector: 'm-editar-operacion',
  templateUrl: './editar-operacion.component.html',
  styleUrls: ['./editar-operacion.component.scss']
})
export class EditarOperacionComponent implements OnInit {
  operacion: OperacionModel;
	oldOperacion: OperacionModel;
	selectedTab: number = 0;
	loadingSubject = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSubject.asObservable();
	operacionForm: FormGroup;
  hasFormErrors: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private operacionService:OperacionService,
    private operacionFB: FormBuilder,
    private layoutUtilsService:LayoutUtilsService
  ) { }
  ngOnInit() {
    this.loadingSubject.next(true);
		this.activatedRoute.queryParams.subscribe(params => {
			const id = +params.id;
			if (id && id > 0) {
				this.operacionService.getOperacionById(id).subscribe(res => {
					this.operacion = res;
					this.oldOperacion = Object.assign({}, res);
					this.initOperacion();
				});
			} else {
				const newProduct = new OperacionModel();
				newProduct.clear();
				this.operacion = newProduct;
				this.oldOperacion = Object.assign({}, newProduct);
				this.initOperacion();
			}
		});
	
  }

  initOperacion() {
		this.createForm();
		this.loadingSubject.next(false);
		if (!this.operacion.id) {
			
			return;
		}
		// this.subheaderService.setTitle('Edit product');
		
  }

  createForm() {
		this.operacionForm = this.operacionFB.group({
			id:0,
			nombre: [this.operacion.nombre, Validators.required],
			estado: [this.operacion.estado]
		});
  }

  goBack(id = 0) {
		let _backUrl = 'inmueble/operacion';
		if (id > 0) {
			_backUrl += '?id=' + id;
		}
		this.router.navigateByUrl(_backUrl);
  }
  
  refreshProduct(id = 0) {
		const _refreshUrl = 'ecommerce/products/edit?id=' + id;
		this.router.navigateByUrl(_refreshUrl);
	}
  reset() {
		this.operacion = Object.assign({}, this.oldOperacion);
		this.createForm();
		this.hasFormErrors = false;
		
  }
  
  onSumbit(withBack: boolean = false) {
		this.hasFormErrors = false;
		const controls = this.operacionForm.controls;
		/** check form */
		if (this.operacionForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			this.selectedTab = 0;
			return;
		}

		// tslint:disable-next-line:prefer-const
		let editedOperacion = this.prepareOperacion();

		if (editedOperacion.id > 0) {
			this.updateOperacion(editedOperacion, withBack);
			return;
		}
		this.addOperacion(editedOperacion, withBack);
  }
  
  prepareOperacion(): OperacionModel {
		const controls = this.operacionForm.controls;
		const _operacion = new OperacionModel();
		_operacion.id = this.operacion.id;
		_operacion.nombre = controls['nombre'].value;
    	_operacion.estado = controls['estado'].value;

		return _operacion;
  }
  
  addOperacion(_operacion: OperacionModel, withBack: boolean = false) {
		this.loadingSubject.next(true);
		this.operacionService.createOperacion(_operacion).subscribe(res => {
			this.loadingSubject.next(false);
			if (withBack) {
				this.goBack(res.id);
			} else {
				const message = `La nueva operación ha sido creada exitosamente`;
				this.layoutUtilsService.showActionNotification(message, MessageType.Create, 10000, true, false);
				this.refreshProduct(res.id);
			}
		},error=>{console.log(error)});
  }
  
  updateOperacion(_operacion: OperacionModel, withBack: boolean = false) {
		this.loadingSubject.next(true);
		// Update Product
		// tslint:disable-next-line:prefer-const
		let tasks$ = [this.operacionService.updateOperacion(_operacion)];

		forkJoin(tasks$).subscribe(res => {
			this.loadingSubject.next(false);
			if (withBack) {
				this.goBack(_operacion.id);
			} else {
				const message = `Product successfully has been saved.`;
				this.layoutUtilsService.showActionNotification(message, MessageType.Update, 10000, true, false);
				this.refreshProduct(_operacion.id);
			}
		});
  }
  
  getComponentTitle() {
		let result = 'Crear Operación';
		if (!this.operacion || !this.operacion.id) {
			return result;
		}

		result = `Editar Operación - ${this.operacion.nombre}`;
		return result;
	}

	onAlertClose($event) {
		this.hasFormErrors = false;
	}

		

}
