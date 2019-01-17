import { Component, OnInit ,ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Material
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
// RXJS
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent, merge } from 'rxjs';
import{OperacionService} from '../../_core/servicios/operacion.service';

import { OperacionModel } from '../../_core/modelos/operacion.model';
import { QueryParamsModel } from '../../_core/modelos/query-models/query-params.model';
import { OperacionDataSource } from '../../_core/modelos/data-sources/operacion.datasource';

@Component({
  selector: 'm-lista-operacion',
  templateUrl: './listar-operacion.component.html',
  styleUrls: ['./listar-operacion.component.scss']
})
export class ListarOperacionComponent implements OnInit {
  // Table fields
	dataSource: OperacionDataSource;
	displayedColumns = ['id', 'nombre', 'estado'];
	@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Filter fields
	@ViewChild('searchInput') searchInput: ElementRef;
	filterStatus: string = '';
	filterCondition: string = '';
  parametros:QueryParamsModel;
 
  constructor(private operacionService:OperacionService) { }

  ngOnInit() {
    // this.operacionService.getAllOperaciones().subscribe((data)=>{
    //   console.log(data);
    // },error=>{console.log(error)});
    this.dataSource = new OperacionDataSource(this.operacionService);
    // this.dataSource.loadOperaciones(this.parametros);
    // console.log(this.dataSource);
    this.loadOperaciones();
  }

  loadOperaciones() {
	
		const queryParams = new QueryParamsModel(
			this.filterConfiguration(),
			this.sort.direction,
			this.sort.active,
			this.paginator.pageIndex,
			this.paginator.pageSize
		);
    this.dataSource.loadOperaciones(queryParams);
    console.log(this.dataSource);
	}

	/** FILTRATION */
	filterConfiguration(): any {
		const filter: any = {};
		const searchText: string = this.searchInput.nativeElement.value;

		if (this.filterStatus && this.filterStatus.length > 0) {
			filter.status = +this.filterStatus;
		}

		if (this.filterCondition && this.filterCondition.length > 0) {
			filter.condition = +this.filterCondition;
		}

		filter.model = searchText;

		filter.manufacture = searchText;
		filter.color = searchText;
		filter.VINCode = searchText;
		return filter;
	}




  

}
