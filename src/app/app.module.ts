import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EndpointInfoService } from './endpoint-info.service';
import {HttpClientModule} from '@angular/common/http';
import { SelectBreedsComponent } from './select-breeds/select-breeds.component';
import { HistoryRecordsComponent } from './history-records/history-records.component';
import { ShowSpecificBreedComponent } from './show-specific-breed/show-specific-breed.component';
import { SavedRequestsComponent } from './saved-requests/saved-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectBreedsComponent,
    HistoryRecordsComponent,
    ShowSpecificBreedComponent,
    SavedRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ EndpointInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
