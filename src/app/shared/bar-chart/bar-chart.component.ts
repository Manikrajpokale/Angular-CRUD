import { Component, Input, OnChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @Input() products: any[] = [];

  chartData: any[] = [];

  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  ngOnChanges(): void {
    this.chartData = this.products.map((product) => ({
      name: product.name,
      value: product.price
    }));
  }

}
