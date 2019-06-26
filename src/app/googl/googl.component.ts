import { Component, OnInit } from '@angular/core';
import { StockService } from '../_services/stock.service';

@Component({
  selector: 'app-googl',
  templateUrl: './googl.component.html',
  styleUrls: ['./googl.component.css']
})
export class GooglComponent implements OnInit {

  stockOpen: number[] = [];
  stockClose: number[] = [];
  dateInterval: string[] = [];
  public lineChartData = [
    { data: this.stockOpen, label: 'Open'},
    { data: this.stockClose, label: 'Close'}
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [330, 600, 260, 700, 250, 300, 590],  label: 'Account A' },
    // { data: [120, 455, 100, 340, 170, 369, 288], label: 'Account B' },
    // { data: [45, 67, 800, 500, 2, 909, 456], label: 'Account C' }
  ];
  // public lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels = [];
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
    this.stockService.getGOOGL().subscribe( data => {
      stockData = data['Monthly Time Series'];
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