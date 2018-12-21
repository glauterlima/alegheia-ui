import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable, Component } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

import { Demanda } from 'app/core/model';



export class DemandaFiltro {
  nome: string;
  data: Date;
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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NDM5MTk5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6Ijc0NjNhYjE5LWMyOTctNGMwNS1iNTRiLWMzYWQ1YmM5MjgyYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.oEw7rKMA4LMYwAbUHhYyZQpNtpRfYZx2XoAhD1FX2xY');

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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NDM5MTk5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6Ijc0NjNhYjE5LWMyOTctNGMwNS1iNTRiLWMzYWQ1YmM5MjgyYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.oEw7rKMA4LMYwAbUHhYyZQpNtpRfYZx2XoAhD1FX2xY');

    return this.http.delete(`${this.demandasUrl}/${codigo}`, { headers })
    .toPromise()
    .then(() => null);
  }

  adicionar(demanda: Demanda): Promise<Demanda> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NDM5MTk5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6Ijc0NjNhYjE5LWMyOTctNGMwNS1iNTRiLWMzYWQ1YmM5MjgyYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.oEw7rKMA4LMYwAbUHhYyZQpNtpRfYZx2XoAhD1FX2xY');
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.demandasUrl,
      JSON.stringify(demanda), { headers })
      .toPromise()
      .then(response => response.json());

  }

  atualizar(demanda: Demanda): Promise<Demanda> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NDM5MTk5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6Ijc0NjNhYjE5LWMyOTctNGMwNS1iNTRiLWMzYWQ1YmM5MjgyYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.oEw7rKMA4LMYwAbUHhYyZQpNtpRfYZx2XoAhD1FX2xY');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.demandasUrl}/${demanda.codigo}`,
    JSON.stringify(demanda), { headers })
    .toPromise()
    .then(response => {
      const demandaAlterada = response.json() as Demanda;

      this.converterStringsParaDatas([demandaAlterada]);

      return demandaAlterada;
    });
  }

  buscarPorCodigo(codigo: number): Promise<Demanda> {
    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQ1NDM5MTk5LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX1NJU1RFTUEiLCJST0xFX1BFU1FVSVNBUl9QRVNTT0EiLCJST0xFX0NBREFTVFJBUl9TSVNURU1BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfUEVTUVVJU0FSX0RFTUFOREEiLCJST0xFX1JFTU9WRVJfREVNQU5EQSIsIlJPTEVfUkVNT1ZFUl9MT1RFIiwiUk9MRV9DQURBU1RSQVJfUEVTU09BIiwiUk9MRV9QRVNRVUlTQVJfU0lTVEVNQSIsIlJPTEVfQ0FEQVNUUkFSX0xPVEUiLCJST0xFX1BFU1FVSVNBUl9MT1RFIl0sImp0aSI6Ijc0NjNhYjE5LWMyOTctNGMwNS1iNTRiLWMzYWQ1YmM5MjgyYSIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.oEw7rKMA4LMYwAbUHhYyZQpNtpRfYZx2XoAhD1FX2xY');

    return this.http.get(`${this.demandasUrl}/${codigo}`, { headers })
      .toPromise()
      .then(response => {
        const demanda = response.json() as Demanda;

        this.converterStringsParaDatas([demanda]);

        return demanda;
      });
  }

  private converterStringsParaDatas(demandas: Demanda[]) {
    for (const demanda of demandas) {
      demanda.data = moment(demanda.data, 'YYYY-MM-DD').toDate();
    }
  }
}


