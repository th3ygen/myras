import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-communities-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class PageCommunitiesNewsComponent implements OnInit {

  public clusters: SelectItem[];
  public time: SelectItem[];

  public selectedCluster: SelectItem;
  public selectedTime: SelectItem;

  constructor() {
    this.clusters = [
      { label: 'Industry', value: 'industry' },
      { label: 'Government', value: 'government' },
      { label: 'Academia', value: 'academia' },
      { label: 'Public', value: 'public' },
    ];
    this.time = [
      { label: 'Today', value: '1' },
      { label: 'This week', value: '7' },
      { label: 'This month', value: '31' },
    ];
  }

  ngOnInit(): void {
  }

}
