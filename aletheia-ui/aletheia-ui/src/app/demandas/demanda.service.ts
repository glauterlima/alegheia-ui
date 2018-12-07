import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable, Component } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class DemandaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class DemandaService {

  demandasUrl = 'http://localhost:8080/demandas';

  constructor(private http: Http) { }

  pesquisar(filtro: DemandaFiltro): Promise<any> {

    const params = new URLSearchParams();
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0MjE4NzI5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6IjhlYzcwOTQzLWMxYmUtNDZhZC05MjQ3LThmMzYzNDdkZGU5YSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.Rn2huw9jjiTIOwOzHa4_TyNLl-WM1eYLEK6dMcGZUlw');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.demandasUrl}?resumo`, { headers, search: params })
    .toPromise()
    .then(response => {
      const responseJson = response.json();
      const demandas = responseJson.content;

      const resultado = {
        demandas,
        total: responseJson.totalElements
      };

      return resultado;
    })
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0MjE4NzI5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6IjhlYzcwOTQzLWMxYmUtNDZhZC05MjQ3LThmMzYzNDdkZGU5YSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.Rn2huw9jjiTIOwOzHa4_TyNLl-WM1eYLEK6dMcGZUlw');

    return this.http.delete(`${this.demandasUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }
}


