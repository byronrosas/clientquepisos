import { of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { OperacionService } from '../../servicios/operacion.service';
import { QueryParamsModel } from '../query-models/query-params.model';
import { BaseDataSource } from './_base.datasource';
import { QueryResultsModel } from '../query-models/query-results.model';

export class OperacionDataSource extends BaseDataSource {
	constructor(private operacionService:OperacionService) {
		super();
	}
	loadOperaciones(
		queryParams: QueryParamsModel
	) {
		this.loadingSubject.next(true);
		this.operacionService.findOperaciones(queryParams).pipe(
			tap(res => {
				console.log(res);
				this.entitySubject.next(res['payload']);
				this.paginatorTotalSubject.next(res['payload'].length);
			}),
			catchError(err => of(new QueryResultsModel([], err))),
			finalize(() => this.loadingSubject.next(false))
		).subscribe();
	}

	
}
