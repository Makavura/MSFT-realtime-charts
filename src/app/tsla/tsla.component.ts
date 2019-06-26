import { Component, OnInit } from '@angular/core';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-tsla',
  templateUrl: './tsla.component.html',
  styleUrls: ['./tsla.component.css']
})
export class TslaComponent implements OnInit {
  public metaData = {};
  stockOpen: number[] = [];
  stockClose: number[] = [];
  dateInterval: string[] = [];
  public lineChartData = [
    { data: this.stockOpen, label: 'Open'},
    { data: this.stockClose, label: 'Close'}
  ];

  public lineChartLabels = [
  ];

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
    let stockData = [];
    this.stockService.getTSLA().subscribe( data => {
      stockData = data['Monthly Time Series'];
      this.metaData = data['Meta Data'];
      // tslint:disable-next-line: forin 
      for (const item in stockData) {
        this.dateInterval.push(item);
        this.stockOpen.push(Number(stockData[item]['1. open']));
        this.stockClose.push(Number(stockData[item]['4. close']));
      }
      this.lineChartLabels = this.dateInterval;

    });

  }
}