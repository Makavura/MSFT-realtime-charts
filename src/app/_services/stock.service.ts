import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../config';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(public http: HttpClient) { }

  getMSFT() {
     return this.http.get(appConfig.MSFT);
  }
}
