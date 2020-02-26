import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../../../services/news.service';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class PageAdminNewsComponent implements OnInit {
  public type: SelectItem[];
  public selectedType: string[] = [];
  public description: string;
  public tags: string;

  constructor(private news: NewsService) {
    this.type = [];
    this.type.push({label: 'General', value: 'general'});
    this.type.push({label: 'Social', value: 'social'});
    this.type.push({label: 'Tech', value: 'tech'});
    this.type.push({label: 'Event', value: 'event'});
    this.type.push({label: 'Competition', value: 'competition'});
  }

  ngOnInit() {
    this.news.getLatestNews(1).subscribe(data => {
      console.log(data);

    });
  }

}
