import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { DemandasPesquisaComponent } from './demandas-pesquisa/demandas-pesquisa.component';
import { DemandasCadastroComponent } from './demandas-cadastro/demandas-cadastro.component';
import { DemandasGridComponent } from './demandas-grid/demandas-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule
  ],
  declarations: [
    DemandasCadastroComponent,
    DemandasGridComponent,
    DemandasPesquisaComponent
  ],
  exports: [
    DemandasCadastroComponent,
    DemandasPesquisaComponent
  ]
})
export class DemandasModule { }