import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandas-cadastro',
  templateUrl: './demandas-cadastro.component.html',
  styleUrls: ['./demandas-cadastro.component.css']
})
export class DemandasCadastroComponent implements OnInit {

  status = [
    { label: 'Pendente', value: 'PENDENTE' },
    { label: 'Em análise', value: 'EMANALISE' },
    { label: 'Finalizada', value: 'FINALIZADA' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
