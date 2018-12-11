import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: Http) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0NTYzMjY2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6ImI1NzJiODMwLTcxYzctNDJhMy04NmJmLTVjNWE3MWQxMTg2MCIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.I---RBuiOe5VHDFcWJfsgqqJ8c3xMv98ol05cp4T2CM');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasUrl}`, { headers, search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const pessoas = responseJson.content;

        const resultado = {
          pessoas,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0NTYzMjY2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6ImI1NzJiODMwLTcxYzctNDJhMy04NmJmLTVjNWE3MWQxMTg2MCIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.I---RBuiOe5VHDFcWJfsgqqJ8c3xMv98ol05cp4T2CM');

    return this.http.get(this.pessoasUrl, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(codigo: number): Promise<void> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0NTYzMjY2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6ImI1NzJiODMwLTcxYzctNDJhMy04NmJmLTVjNWE3MWQxMTg2MCIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.I---RBuiOe5VHDFcWJfsgqqJ8c3xMv98ol05cp4T2CM');

    return this.http.delete(`${this.pessoasUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ0NTYzMjY2LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6ImI1NzJiODMwLTcxYzctNDJhMy04NmJmLTVjNWE3MWQxMTg2MCIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.I---RBuiOe5VHDFcWJfsgqqJ8c3xMv98ol05cp4T2CM');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise()
      .then(() => null);
  }

}




