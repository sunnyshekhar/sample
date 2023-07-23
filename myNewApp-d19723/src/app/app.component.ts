import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'myNewApp-d19723';
  resp: String;
  data = new Data();
  constructor(private apiService:ApiService) {}
  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.data.key="ss-1";
    this.apiService.callBackend(this.data)
      .subscribe(bkndResponse => {
        console.log(bkndResponse)
        this.data=bkndResponse;
      })      
 
  }
}
