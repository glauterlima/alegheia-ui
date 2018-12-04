import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DemandaService {

  demandasUrl = 'http://localhost:8080/demandas';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {

    const headers = new Headers();
    // tslint:disable-next-line:max-line-length
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQzOTQwMDQyLCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6ImI5NGUxMzEwLWI1MmQtNGU0MS04YmEwLWQ3ZGU2OTBlMDAwNyIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.xgGnG4IkSdXTArtofG3nay8bYI6tHO39IS6Q5Qn4Ijw');

    return this.http.get(`${this.demandasUrl}?resumo`, { headers })
    .toPromise()
    .then(response => response.json().content)
    /*.then(response => {
      console.log(response.json());
    })*/
  }
}


