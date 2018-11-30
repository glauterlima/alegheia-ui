import { DemandaService } from './../demanda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demandas-pesquisa',
  templateUrl: './demandas-pesquisa.component.html',
  styleUrls: ['./demandas-pesquisa.component.css']
})
export class DemandasPesquisaComponent implements OnInit {

  demandas = [];

  constructor(private demandaService: DemandaService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.demandaService.pesquisar()
    .then(demandas => this.demandas = demandas);
  }
}
