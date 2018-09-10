import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EndpointInfoService {

  constructor(private http: HttpClient) { }

  listAllBreeds(): Observable<Object>{
    let url = 'https://dog.ceo/api/breeds/list/all';
    return this.http.get(url);
  }
}
