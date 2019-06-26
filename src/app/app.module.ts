import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng4-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { StockService} from './_services/stock.service';
import { GooglComponent } from './googl/googl.component';
import { TeslaComponent } from './tesla/tesla.component';
import { TslaComponent } from './tsla/tsla.component';
import { AmznComponent } from './amzn/amzn.component';
import { MsftComponent } from './msft/msft.component';

@NgModule({
  declarations: [
    AppComponent,
    LineGraphComponent,
    GooglComponent,
    TeslaComponent,
    TslaComponent,
    AmznComponent,
    MsftComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
