import { DemandaService } from './demandas/demanda.service';
import { Http, HttpModule } from '@angular/http';
import { PessoasModule } from './pessoas/pessoas.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LinhaComponent } from './navegacao/linha/linha.component';
import { DemandasModule } from './demandas/demandas.module';
import { CoreModule } from './core/core.module';
import { PessoaService } from './pessoas/pessoa.service';

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

    DemandasModule,
    PessoasModule

  ],
  providers: [
    DemandaService,
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
