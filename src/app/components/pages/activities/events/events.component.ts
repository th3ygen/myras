import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { HttpClient } from '@angular/common/http';

import { MasterService } from '../../../../services/master.service';
import { EventsService } from '../../../../services/events.service';

interface Event {
  id: string;
  imgPath: string;
  title: string;
  brief: string;
  cluster: string;
  stats: Array<{
    icon: string;
    label: string;
    value: number;
  }>;
}

interface Cluster {
  label: string;
  value: string;
  events: Array<Event>;
}

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-page-activities-vents',
  animations: [
    trigger(
      'inOutAnimation', [
        transition(
          ':enter', [
            style({
              opacity: 0
            }),
            animate(
              '.3s ease-out',
              style({
                opacity: 1
              })
            )
          ]
        )
      ]
    ),
    trigger(
      'eventItem', [
        transition(
          ':enter', [
            style({
              transform: 'scale(1.03)',
              opacity: 0
            }),
            animate(
              '.3s ease-out',
              style({
                transform: 'scale(1.0)',
                opacity: 1
              })
            )
          ]
        ),
        transition(
          ':leave', [
            style({
              transform: 'scale(1.0)',
              opacity: 1
            }),
            animate(
              '.3s ease-out',
              style({
                transform: 'scale(0.97)',
                opacity: 0
              })
            )
          ]
        ),
      ]
    )
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class PageActivitiesEventsComponent implements OnInit {
  public static ITEM_LIMIT = 4;

  public reader: FileReader;

  @ViewChild('content', { static: true }) content: ElementRef;

  public sortItems: SelectItem[];

  public activeCluster = '';
  public activeKeyword = '';
  public activeSort = [];

  public loadingEvent = true;

  public clusterIndex = 0;

  public clusterNav: Array<{
    label: string;
    name: string;
    active: boolean;
  }>;

  public events: Array<Event> = [];

  public reading = false;

  public readEventData = {
    title: 'Lorem itsum sit doler',
    imgPath: '/assets/stock/event.jpg',
    // tslint:disable-next-line: max-line-length
    content: 'Quisque tincidunt semper orci sit amet volutpat. Proin eget pharetra neque. Morbi condimentum, tellus eget finibus aliquam, dui lacus pulvinar ipsum, non lobortis mi orci a leo. Nam vehicula neque vitae ante sagittis, a accumsan enim aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mattis pretium tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget tincidunt lacus. Aenean sed metus ex. In maximus porttitor bibendum. Nulla aliquet commodo pellentesque. Sed vulputate placerat erat nec pulvinar. Donec dapibus eros ut nunc consequat, at volutpat nulla dignissim. Etiam sodales, felis non lacinia accumsan, turpis urna porta risus, eu convallis ex magna nec massa. Donec neque enim, sodales vel accumsan vel, ultricies accumsan justo. Curabitur neque diam, fringilla nec ipsum id, fringilla porttitor odio.',
    stats: [
      {
        class: 'author',
        val: 'Muhd. Aidil Syazwan'
      },
      {
        class: 'ecluster',
        val: 'Academia'
      },
      {
        class: 'date',
        val: '19 May 2043'
      }
    ]
  };

  scroll2Top(): void {
    window.scrollTo({
      top: this.content.nativeElement.offsetTop - 80,
      behavior: 'smooth'
    });
  }

  private read(file: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        if (reader.result) {
          resolve(reader.result);
        } else {
          reject('can\'t read event file');
        }
      };
    });
  }

  async toggleRead(flag: boolean, id: string) {
    this.reading = flag;
    this.scroll2Top();
    if (flag) {
      this.master.setLoading(true);
      const { event } = await this.eventsService.getEventById(id);

      const content = await this.http.get('http://localhost:8080' + event.contentPath, { responseType: 'blob' }).toPromise();

      this.readEventData.imgPath = `http://localhost:8080${event.imgPath}`;
      this.readEventData.content = await this.read(content) as any;

      this.master.setLoading(false);
    }
  }

  async query() {
    this.events = [];
  
    this.loadingEvent = true;

    const { events } = await this.eventsService.query(this.activeCluster, this.activeKeyword, this.activeSort);
  
    for await (const event of events) {
      this.events.push({
        id: event._id,
        imgPath: `http://localhost:8080${event.imgPath}`,
        title: event.title,
        brief: event.description,
        cluster: event.cluster,
        stats: [{ icon: 'fas fa-eye', label: 'views', value: event.views }]
      });
    }

    this.loadingEvent = false;
  }

  selectCluster(x: number, which: string) {
    for (const cnav of this.clusterNav) {
      cnav.active = false;
    }
    this.clusterNav[x].active = true;
    this.activeCluster = which;

    this.query();

    this.scroll2Top();
  }

  constructor( private eventsService: EventsService, private http: HttpClient, private master: MasterService ) {}

  async ngOnInit() {
    this.reader = new FileReader();
    this.sortItems = [
      { label: 'Latest', value: ['datePublish', '-1']},
      { label: 'Oldest', value: ['datePublish', '1'] },
      { label: 'Most views', value: ['views', '-1'] },
      { label: 'Least views', value: ['views', '1'] },
    ];

    this.activeCluster = '';

    this.clusterNav = [
      {
        label: 'All',
        name: '',
        active: true
      },
      {
        label: 'Industry',
        name: 'industry',
        active: false
      },
      {
        label: 'Government',
        name: 'government',
        active: false
      },
      {
        label: 'Academia',
        name: 'academia',
        active: false
      },
      {
        label: 'Public',
        name: 'public',
        active: false
      }
    ];

    this.activeSort = this.sortItems[0].value;

    this.selectCluster(0, '');
  }
}
