import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable, Component } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Demanda } from 'app/core/model';



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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1MzQyMzAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6IjAxZWI3Y2VjLTliNWItNDRhOS1hZmFlLWVlNmEwNDUxYTQ0NSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.U_mQoPT5q9ZCUSTdDFCTfod9Gl3HLsupS3E8ECoa3sk');

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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1MzQyMzAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6IjAxZWI3Y2VjLTliNWItNDRhOS1hZmFlLWVlNmEwNDUxYTQ0NSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.U_mQoPT5q9ZCUSTdDFCTfod9Gl3HLsupS3E8ECoa3sk');

    return this.http.delete(`${this.demandasUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }

  adicionar(demanda: Demanda): Promise<Demanda> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1MzQyMzAzLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6IjAxZWI3Y2VjLTliNWItNDRhOS1hZmFlLWVlNmEwNDUxYTQ0NSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.U_mQoPT5q9ZCUSTdDFCTfod9Gl3HLsupS3E8ECoa3sk');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.demandasUrl,
      JSON.stringify(demanda), { headers })
      .toPromise()
      .then(response => response.json());

  }
}


