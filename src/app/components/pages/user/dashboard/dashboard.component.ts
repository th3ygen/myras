import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageUserDashboardComponent implements OnInit {

  public events = [
    {
      title: 'event 1',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 2',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 3',
      date: Date.now(),
      daysRemaining: 0
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
