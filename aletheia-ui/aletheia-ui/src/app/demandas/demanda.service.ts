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
    headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTQzNjE1MTA0LCJhdXRob3JpdGllcyI6WyJST0xFX0NBREFTVFJBUl9ERU1BTkRBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9DQURBU1RSQVJfU0lTVEVNQSIsIlJPTEVfUkVNT1ZFUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9ERU1BTkRBIiwiUk9MRV9SRU1PVkVSX0RFTUFOREEiLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9TSVNURU1BIl0sImp0aSI6IjhlM2U4MmZlLWMzZWUtNDNkZS04NWYwLWJhMWM4NTVmNGRlNyIsImNsaWVudF9pZCI6ImFuZ3VsYXIifQ.Vx_3UAzXKFXhWVvNyZfBs3c_aQLMJj43zy-7Y5EUph0');

    return this.http.get(`${this.demandasUrl}?resumo`, { headers })
    .toPromise()
    .then(response => response.json().content)
  }
}


