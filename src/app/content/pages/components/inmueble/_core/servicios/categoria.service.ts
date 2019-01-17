import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap,map } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { CategoriaModel } from '../modelos/categoria.model';
import { QueryParamsModel } from '../modelos/query-models/query-params.model';
import { QueryResultsModel } from '../modelos/query-models/query-results.model';
import{URLGLOBAL} from './global';

const API_URL_OPERACION=URLGLOBAL+'categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }
}
