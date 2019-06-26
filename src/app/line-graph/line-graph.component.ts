import { Component, OnInit } from '@angular/core';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [330, 600, 260, 700, 250, 300, 590],  label: 'Account A' },
    { data: [120, 455, 100, 340, 170, 369, 288], label: 'Account B' },
    { data: [45, 67, 800, 500, 2, 909, 456], label: 'Account C' }
  ];
  public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors = [
    {
      borderColor: 'rgb(255, 10, 10)',
    },
    {
      borderColor: 'rgb(83, 255, 9)',
     },
    {
      borderColor: 'rgb(103, 58, 183)',
     },
    {
      borderColor: 'black'
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(public stockService: StockService) { }

  ngOnInit() {
    this.getStockData();
  }

  getStockData() {
    this.stockService.getMSFT().subscribe( data => {
      console.log(data);
    });

  }
}
