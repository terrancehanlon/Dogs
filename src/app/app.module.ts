import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EndpointInfoService } from './endpoint-info.service';
import {HttpClientModule} from '@angular/common/http';
import { SelectBreedsComponent } from './select-breeds/select-breeds.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectBreedsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ EndpointInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
