import { Component, OnInit } from '@angular/core';
import { EndpointInfoService } from '../endpoint-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private endpointInfo: EndpointInfoService) { }

  breedList = [];

  ngOnInit() {
    this.endpointInfo.listAllBreeds().subscribe((response) => {
      console.log(response);
      for(let breed in response['message'])
      {
        this.breedList.push(breed);
      }
      console.log(this.breedList);

    })
  }

}