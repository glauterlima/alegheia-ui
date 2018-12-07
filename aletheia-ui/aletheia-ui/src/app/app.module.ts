import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { AppComponent } from './app.component';
import { LinhaComponent } from './navegacao/linha/linha.component';
import { DemandasModule } from './demandas/demandas.module';
import { CoreModule } from './core/core.module';
import { PessoaService } from './pessoas/pessoa.service';
import { PessoasModule } from './pessoas/pessoas.module';
import { DemandaService } from './demandas/demanda.service';


@NgModule({
  declarations: [
    AppComponent,
    LinhaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,

    DemandasModule,
    PessoasModule

  ],
  providers: [
    DemandaService,
    PessoaService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
