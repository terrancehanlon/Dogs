import { Component, OnInit } from '@angular/core';
import { EndpointInfoService } from '../endpoint-info.service';
import { HistoryRecordService } from '../history-record.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private endpointInfo: EndpointInfoService, private historyService: HistoryRecordService) { }

  breedList = [];
  currentPictureLink;
  TIME_INTERVAL = 5000;

  ngOnInit() {
    //Load list of all breeds
    this.endpointInfo.listAllBreeds().subscribe((response) => {
      console.log(response);
      for(let breed in response['message'])
      {
        this.breedList.push(breed);
      }
      console.log(this.breedList);
      let url = this.historyService.requests.pop();
      this.historyService.addItem(response, url);
      
    })

    this.endpointInfo.getRandomPicture().subscribe((response) => {
      console.log(response);
      this.currentPictureLink = response['message'];
    })

    //load random picture
    setInterval(() => {
      this.endpointInfo.getRandomPicture().subscribe((response) => {
        console.log(response);
        this.currentPictureLink = response['message'];
      })
    }, this.TIME_INTERVAL);

  }

  getRandomPicture(): void{
    this.endpointInfo.getRandomPicture().subscribe((response) => {
      console.log(response);
      this.currentPictureLink = response['message'];
    })
  }

  
}
