import { Component, OnInit } from '@angular/core';
import { EndpointInfoService } from '../endpoint-info.service';
import { HistoryRecordService } from '../history-record.service';

@Component({
  selector: 'app-select-breeds',
  templateUrl: './select-breeds.component.html',
  styleUrls: ['./select-breeds.component.css']
})
export class SelectBreedsComponent implements OnInit {

  breedList = [];
  selectedBreed = {
    name: '',
    link: ''
  }
  

  constructor(private endpointInfo: EndpointInfoService, private historyService: HistoryRecordService) { }

  ngOnInit() {
        //Load list of all breeds
        console.log('loading breeds');
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
  }

  selectBreed(breed): void{
    console.log(breed);
    this.selectedBreed['name'] = breed;
    this.endpointInfo.getByBreed(breed)
    .subscribe((response) => {
      console.log(response);
      this.selectedBreed['link'] = response['message'];
      console.log(this.selectedBreed);
    }, err => {
      console.log(err);
    })
  }

}
