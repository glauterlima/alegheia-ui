import { PessoasModule } from './pessoas/pessoas.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LinhaComponent } from './navegacao/linha/linha.component';
import { DemandasModule } from './demandas/demandas.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LinhaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,

    DemandasModule,
    PessoasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
