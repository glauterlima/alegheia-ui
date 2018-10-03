import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    { nome: 'SARH-78', sistema: 'SARH', pessoa: 'Glauter Santos',
lote: 'JANEIRO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 58.63, data: '25/09/2018'},
{ nome: 'EAVS-89', sistema: 'EAVS', pessoa: 'Hanna krycia',
lote: 'FEVEREIRO/2018', plataforma: 'JAVA', totalPfPlataforma: 78.96, data: '25/10/2018'},
{ nome: 'SIREC-11', sistema: 'SARH', pessoa: 'Glauter Santos',
lote: 'MARCO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 54.88, data: '25/11/2018'}
  ];
}
