import { Component, OnInit } from '@angular/core';
import { EndpointInfoService } from '../endpoint-info.service';
import { HistoryRecordService } from '../history-record.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private endpointInfo: EndpointInfoService, private historyService: HistoryRecordService) { }

  breedList = [];
  currentPictureLink;
  TIME_INTERVAL = 50000;

  dimensions = {
    width: null,
    height: null
  }

  ngOnInit() {


    this.endpointInfo.getRandomPicture().subscribe((response) => {
      console.log(response);
      this.currentPictureLink = response['message'];
    })

    //load random picture
    setInterval(() => {
      this.endpointInfo.getRandomPicture().subscribe((response) => {
        console.log(response);

        let div = document.getElementById("pictureFrame");
        //div.innerHTML = '';

        let input = document.createElement("input");
        input.id = "pic";
        
        this.currentPictureLink = response['message'];
        input.src = this.currentPictureLink;
        this.getPictureSize(this.currentPictureLink);
        if(this.dimensions['width'] > 800 || this.dimensions['height'] > 1000)
        {
          input.width = 500;
          input.height = 500;
        }
       // div.innerHTML += input;
      })
    }, this.TIME_INTERVAL);

  }

  getRandomPicture(): void{
    this.endpointInfo.getRandomPicture().subscribe((response) => {
      console.log(response);
      this.currentPictureLink = response['message'];
    })
  }

  getPictureSize(url): void{
    let w, h;
    let img = new Image;
    img.src = url;
    img.onload = () => {
      w = img.width;
      h = img.height;
      this.dimensions['width'] = w;
      this.dimensions['height'] = h;
    }
  }

  
}
