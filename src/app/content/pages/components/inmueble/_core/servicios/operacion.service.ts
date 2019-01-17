import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable, forkJoin, BehaviorSubject, of } from 'rxjs';
import { mergeMap,map } from 'rxjs/operators';
import { HttpUtilsService } from '../utils/http-utils.service';
import { OperacionModel } from '../modelos/operacion.model';
import { QueryParamsModel } from '../modelos/query-models/query-params.model';
import { QueryResultsModel } from '../modelos/query-models/query-results.model';
import{URLGLOBAL} from './global';

const API_URL_OPERACION=URLGLOBAL+'operacion';
@Injectable({
  providedIn: 'root'
})
export class OperacionService {
  // private headers;
  lastFilter$: BehaviorSubject<QueryParamsModel> = new BehaviorSubject(new QueryParamsModel({}, 'asc', '', 0, 10));

  constructor(private http: HttpClient,
		private httpUtils: HttpUtilsService) {
    console.log(API_URL_OPERACION);
    // this.headers = new Headers({'Content-Type':'application/json'});
    // let headers=new Headers({'Content-Type':'application/json'});
    
   }

  //  crearOperacion(operacion): Observable<OperacionModel> {
	// 	const httpHeaders = this.httpUtils.getHTTPHeaders();
	// 	return this.http.post<OperacionModel>(API_URL_OPERACION, operacion, { headers: httpHeaders });
  // }
  
  //  getAllOperaciones(): Observable<OperacionModel[]> {
  //   return this.http.get(API_URL_OPERACION).pipe(map(res=>res.json());
    
  // }
//   findAllCourses(): Observable<Course[]> {
//     return this.http.get('/api/courses')
//         .pipe(
//             map(res => res['payload'])
//         );
// }

  getAllOperaciones():Observable<OperacionModel[]> {
    return this.http.get(API_URL_OPERACION).pipe(
                   map(res => res['payload'])
          );;
    
  }

  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findOperaciones(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		
    return this.http.get<OperacionModel[]>(API_URL_OPERACION,
                                  {
                                    params:this.httpUtils.getFindHTTPParams(queryParams)
                                  }).pipe(
                                      map(res => {
                                        res['payload']=res;
                                        return res["payload"]; 
                                      })
		                               );
	}

  getOperacionById(operacionId: number): Observable<OperacionModel> {
		return this.http.get<OperacionModel>(API_URL_OPERACION + `/${operacionId}`);
  }

  createOperacion(operacion): Observable<OperacionModel> {
    // const httpHeaders = this.httpUtils.getHTTPHeaders();
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json');
    // let pheaders=new Headers({'Content-Type':'application/json'});
    console.log(operacion);
    let params=JSON.stringify(operacion);
    // console.log(httpHeaders);
    console.log(params);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

		return this.http.post<OperacionModel>(API_URL_OPERACION,operacion
    ,httpOptions)
  }
  
  // UPDATE => PUT: update the product on the server
	updateOperacion(operacion: OperacionModel): Observable<any> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_URL_OPERACION, operacion, { headers: httpHeaders });
	}
  
  // res['payload'] = res;
  // return res["payload"]; 
  
	
  

  
}
