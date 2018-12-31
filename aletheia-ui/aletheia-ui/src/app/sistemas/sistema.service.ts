import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class SistemaService {

  sistemasUrl = 'http://localhost:8080/sistemas';

  constructor(private http: AuthHttp) { }

  listarTodos(): Promise<any> {
    return this.http.get(this.sistemasUrl)
    .toPromise()
    .then(response => response.json());
  }

}
