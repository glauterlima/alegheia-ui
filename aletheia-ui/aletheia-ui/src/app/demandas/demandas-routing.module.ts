import { NgModule } from '@angular/core';

import { DemandasPesquisaComponent } from './demandas-pesquisa/demandas-pesquisa.component';
import { DemandasCadastroComponent } from './demandas-cadastro/demandas-cadastro.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'demandas', component: DemandasPesquisaComponent },
  { path: 'demandas/novo', component: DemandasCadastroComponent },
  { path: 'demandas/:codigo', component: DemandasCadastroComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class DemandasRoutingModule { }
