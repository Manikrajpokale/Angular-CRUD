import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { TableComponent } from './table/table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    TableComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    NgxChartsModule
  ],
  exports: [TableComponent, BarChartComponent]
})
export class SharedModule { }
