import { DemandaService } from 'app/demandas/demanda.service';
import { FormControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from 'app/core/error-handler.service';

import { Demanda } from './../../core/model';
import { PessoaService } from './../../pessoas/pessoa.service';
import { LoteService } from './../../lotes/lote.service';
import { SistemaService } from './../../sistemas/sistema.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-demandas-cadastro',
  templateUrl: './demandas-cadastro.component.html',
  styleUrls: ['./demandas-cadastro.component.css']
})
export class DemandasCadastroComponent implements OnInit {

  status = [];

  plataformas = [
    {label: 'Asp', value: 'ASP' },
    {label: 'Html', value: 'HTML' },
    {label: 'Java', value: 'JAVA' },
    {label: 'Javascript', value: 'JAVASCRIPT' },
    {label: 'Mobile', value: 'MOBILE' },
    {label: 'Oracle Forms', value: 'ORACLEFORMS' },
    {label: 'Perl', value: 'PERL' },
    {label: 'Php', value: 'PHP' },
    {label: 'PL/SQL', value: 'PLSQL' },
    {label: 'Portal Web', value: 'PORTAL' },
    {label: 'Python', value: 'PYTHON' },
    {label: 'Unix Shell', value: 'UNIX_SHELL' },
    {label: 'VbScript', value: 'VBSCRIPT' },
    {label: 'Visual Basic', value: 'VISUALBASIC' },
  ];

  pessoas = [];

  demanda = new Demanda();

  tipos = [
    {label: 'Corretiva', value: 'CORRETIVA' },
    {label: 'Evolutiva', value: 'EVOLUTIVA' },
    {label: 'Verificação de Erro', value: 'VERIFICACAOERRO' },
  ];

  lotes = [];

  sistemas = [];

  constructor(
    private loteService: LoteService,
    private sistemaService: SistemaService,
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private demandaService: DemandaService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.carregarLotes();
    this.carregarSistemas();
    this.carregarPessoas();
  }

  salvar(form: FormControl) {
    this.demandaService.adicionar(this.demanda)
    .then(() => {
      this.toasty.success('Demanda adicionada com sucesso!');

      form.reset();
      this.demanda = new Demanda();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarLotes() {
    return this.loteService.listarTodos()
    .then(lotes => {
      this.lotes = lotes.map(l => ({ label: l.nome, value: l.codigo}));
  })
  .catch(erro => this.errorHandler.handle(erro));

  }

  carregarSistemas() {
    return this.sistemaService.listarTodos()
    .then(sistemas => {
      this.sistemas = sistemas.map(s => ({ label: s.nome, value: s.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodas()
    .then(pessoas => {
      this.pessoas = pessoas.map(p => ({ label: p.nome, value: p.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
}
