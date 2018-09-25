import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistoryRecordService } from '../app/history-record.service';



@Injectable({
  providedIn: 'root'
})
export class EndpointInfoService {

  constructor(private http: HttpClient, private historyService: HistoryRecordService) { }

  listAllBreeds(): Observable<Object>{
    let url = 'https://dog.ceo/api/breeds/list/all';
    this.historyService.requests.push(url);
    return this.http.get(url);
  }

  getRandomPicture(): Observable<Object>{
    let url = 'https://dog.ceo/api/breeds/image/random';
    this.historyService.requests.push(url); 
    return this.http.get(url);
  }

  getByBreed(breed): Observable<Object>{
    let url = 'https://dog.ceo/api/breed/' + breed + '/images/random';
    console.log(url);
    this.historyService.requests.push(url);
    console.log(this.historyService.requests);
    return this.http.get(url);
  }
}
