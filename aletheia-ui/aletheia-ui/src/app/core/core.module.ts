import { LoteService } from './../lotes/lote.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { ToastyModule } from 'ng2-toasty';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { DemandaService } from 'app/demandas/demanda.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { SistemaService } from 'app/sistemas/sistema.service';



@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    DemandaService,
    PessoaService,
    LoteService,
    SistemaService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ErrorHandlerService
  ]

})
export class CoreModule { }
