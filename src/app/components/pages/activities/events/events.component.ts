import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-activities-vents',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class PageActivitiesEventsComponent implements OnInit {
  public clusterIndex = 0;

  public clusters: SelectItem[];

  constructor() {
    this.clusters = [
      { label: 'Industry', value: 'industry' },
      { label: 'Government', value: 'government' },
      { label: 'Academia', value: 'academia' },
      { label: 'Public', value: 'public' },
    ];
  }

  ngOnInit(): void {
  }

}
