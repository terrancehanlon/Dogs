import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryRecordService {

  history = [];
  requests = [];

  constructor() { }

  addItem(item, url)
  {
    let obj = { status: null, url: null, contents: null};
    console.log(item);
    obj['status'] = item['status'];
    obj['url'] = url;
    obj['contents'] = [...obj['message']];
    this.history.push(obj);
    console.log(obj);
    console.log(history);
  }
}
