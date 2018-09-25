import { Component, OnInit } from '@angular/core';
import { HistoryRecordService } from '../history-record.service';


@Component({
  selector: 'app-saved-requests',
  templateUrl: './saved-requests.component.html',
  styleUrls: ['./saved-requests.component.css']
})
export class SavedRequestsComponent implements OnInit {
  showingHistory = false;
  constructor(public historyService: HistoryRecordService) { }

  ngOnInit() {
  }

  showHistory()
  {
    this.showingHistory = true;
   
  }

}
