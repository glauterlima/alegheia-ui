import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class LoteService {

  lotesUrl = 'http://localhost:8080/lotes';

  constructor(private http: AuthHttp) { }

  listarTodos(): Promise<any> {


    return this.http.get(this.lotesUrl)
    .toPromise()
    .then(response => response.json());
  }

}
