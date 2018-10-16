import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandas-pesquisa',
  templateUrl: './demandas-pesquisa.component.html',
  styleUrls: ['./demandas-pesquisa.component.css']
})
export class DemandasPesquisaComponent {

  demandas = [
    { nome: 'SARH-78', sistema: 'SARH', pessoa: 'Glauter Santos',
    lote: 'JANEIRO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 58.63, data: new Date(2018, 10, 11), valor: 585},
    { nome: 'EAVS-89', sistema: 'EAVS', pessoa: 'Fernanda Paranaguá',
    lote: 'FEVEREIRO/2018', plataforma: 'JAVA', totalPfPlataforma: 78.96, data: new Date(2018, 10, 12), valor: 874},
  { nome: 'SIREC-11', sistema: 'SARH', pessoa: 'Hanna Krycia',
    lote : 'MARCO/2018', plataforma: 'ORACLEFORMS', totalPfPlataforma: 54.88, data: new Date(2018, 10, 13), valor: 900}
  ];
}
