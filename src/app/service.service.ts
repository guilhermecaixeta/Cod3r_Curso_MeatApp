import { ErrorHandler } from './app.error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Service {

  constructor(private http: Http) { }

  /**
   * Retorna o(s) registro(s) a partir da rota informada.
   * @param route rota a ser usada para obtenção dos dados
   */
  Get<T>(route: string, id?: string): Observable<T> {
    return this.http.get(`${environment.adress}${route}${id ? `/${id}` : ''}`)
      .map(resp => resp.json())
      .catch(ErrorHandler.handleError);
  }
}
