import { DemandaService, DemandaFiltro } from './../demanda.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-demandas-pesquisa',
  templateUrl: './demandas-pesquisa.component.html',
  styleUrls: ['./demandas-pesquisa.component.css']
})
export class DemandasPesquisaComponent implements OnInit {


  totalRegistros = 0;
  filtro = new DemandaFiltro();
  demandas = [];
  @ViewChild('tabela') grid;

  constructor(private demandaService: DemandaService) {}

  ngOnInit() {

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.demandaService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.demandas = resultado.demandas;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(demanda: any) {
    this.demandaService.excluir(demanda.codigo)
    .then(() => {
      if(this.grid.first === 0) {
        this.pesquisar();
      }else {
       this.grid.first = 0;
      }

    });
  }
}
