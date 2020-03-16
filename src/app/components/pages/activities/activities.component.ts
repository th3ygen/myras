import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

import { NewsService } from '../../../services/news.service';

class News {
  header: string;
  brief: string;
  img: string;

  index: number;
}

class ActEvent {
  title: string;
  brief: string;
  imgURL: string;
}
class ActComp {
  title: string;
  brief: string;
  imgURL: string;
}

@Component({
  selector: 'app-page-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class PageActivitiesComponent implements OnInit {
  public events: ActEvent[];
  public comps: ActComp[];

  public clusterIndex = 0;

  constructor(public master: MasterService, private headerService: PageHeaderServiceService, private newsService: NewsService) { }

  ngOnInit() {
    this.events = [
      {
        title: 'Event 1',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Event 2',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Event 3',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Event 4',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Event 5',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Event 6',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
    ];

    this.comps = [
      {
        title: 'Competition 1',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Competition 2',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Competition 3',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Competition 4',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Competition 5',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
      {
        title: 'Competition 6',
        brief: 'lorem ipsum doler sit amet',
        imgURL: ''
      },
    ];

    this.master.setActive(1);

    this.headerService.setHeader('Activities');
    this.headerService.setBody('Building Robots For Asia');
    this.headerService.setDescription('To promote the advancement of the robotics and automation industry.');
    this.headerService.setBreadcrumbItems([
      {label: 'Activities', url: '/activities'}
    ]);
  }

}
