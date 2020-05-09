import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-activities-vents',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class PageActivitiesEventsComponent implements OnInit {
  public clusterIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
