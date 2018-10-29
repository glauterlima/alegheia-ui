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

  plataformas = [
    { label: 'Mobile', value: 'MOBILE' },
    { label: 'Python', value: 'PYTHON' },
    { label: 'Perl', value: 'PERL' },
    { label: 'Unix Shell', value: 'UNIX_SHELL' },
    { label: 'Javascript', value: 'JAVASCRIPT' },
    { label: 'VB Script', value: 'VBSCRIPT' },
    { label: 'Oracle Forms', value: 'ORACLEFORMS' },
    { label: 'ASP', value: 'ASP' },
    { label: 'JAVA', value: 'JAVA' },
    { label: 'PHP', value: 'PHP' },
    { label: 'PLSQL', value: 'PLSQL' },
    { label: 'Visual Basic', value: 'VISUALBASIC' },
    { label: 'HTML', value: 'HTML' },
    { label: 'Portal Web', value: 'PORTAL' },
  ]

  pessoas = [
    { label: 'Fernanda Paranaguá', value: 4 },
    { label: 'Glauter Santos', value: 9 },
    { label: 'Hanna Krycia', value: 3 },
  ];

  tipos = [
    { label: 'Evolutiva', value: 'EVOLUTIVA' },
    { label: 'Corretiva', value: 'CORRETIVA' },
    { label: 'Verificação de erro', value: 'VERIFICACAOERRO' },
  ];

  lotes = [
    { label: 'JANEIRO/2018', value: 1 },
    { label: 'FEVEREIRO/2018', value: 2 },
    { label: 'MARCO/2018', value: 3 },
  ];

  sistemas = [
    { label: 'SIREC', value: 'SIREC' },
    { label: 'SARH', value: 'SARH' },
    { label: 'E-AVS', value: 'EAVS' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
