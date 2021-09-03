import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {

  saleData = [
    { name: 'Mobiles', value: 105000 },
    { name: 'Laptop', value: 55000 },
    { name: 'AC', value: 15000 },
    { name: 'Headset', value: 150000 },
    { name: 'Fridge', value: 20000 }
  ];

  // single: any[];
  // multi: any[];

  // view: number[] = [1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  legendTitle: 'Product Sale Chart';
  xAxisLabel = 'Products';
  yAxisLabel = 'Sale';
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxis = true;
  yAxis = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
