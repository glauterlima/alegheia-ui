import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandas-pesquisa',
  templateUrl: './demandas-pesquisa.component.html',
  styleUrls: ['./demandas-pesquisa.component.css']
})
export class DemandasPesquisaComponent {

  demandas = [
    { nome: 'SARH-78', sistema: 'SARH', pessoa: 'Glauter Santos',
    lote: 'JANEIRO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 58.63, data: '25/09/2018'},
    { nome: 'EAVS-89', sistema: 'EAVS', pessoa: 'Fernanda Paranaguá',
    lote: 'FEVEREIRO/2018', plataforma: 'JAVA', totalPfPlataforma: 78.96, data: '25/10/2018'},
  { nome: 'SIREC-11', sistema: 'SARH', pessoa: 'Hanna Krycia',
    lote : 'MARCO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 54.88, data: '25/11/2018'}
  ];
}
