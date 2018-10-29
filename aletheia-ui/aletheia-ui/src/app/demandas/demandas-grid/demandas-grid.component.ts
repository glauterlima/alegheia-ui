import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demandas-grid',
  templateUrl: './demandas-grid.component.html',
  styleUrls: ['./demandas-grid.component.css']
})
export class DemandasGridComponent {

@Input() demandas = [];

}
