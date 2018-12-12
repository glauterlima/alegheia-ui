
export class Sistema {
  codigo: number;
}

export class Pessoa {
  codigo: number;
}

export class Lote {
  codigo: number;
}

export class Demanda {
  codigo: number;
  nome: string;
  sistema = new Sistema();
  pessoa = new Pessoa();
  lote = new Lote();
  plataforma: string;
  tipo: string = 'EVOLUTIVA';
  totalPfBruto: number;
  totalPfLiquido: number;
  totalPfPlataforma: number;
  data: Date;
  status: string = 'EMANALISE';
  valor: number;
  observacao: string;
}
