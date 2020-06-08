import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface Event {
  imgPath: string;
  title: string;
  brief: string;
  cluster: Cluster;
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
              '.5s ease-out',
              style({
                transform: 'scale(1.0)',
                opacity: 1
              })
            )
          ]
        )
      ]
    )
  ],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class PageActivitiesEventsComponent implements OnInit {
  public static ITEM_LIMIT = 4;

  @ViewChild('content', { static: true }) content: ElementRef;

  public sortItems: SelectItem[];
  public activeSort = '';

  public clusterIndex = 0;

  public clusters: Array<Cluster>;
  public clusterNav: Array<{
    label: string;
    name: string;
  }>;
  public activeCluster = '';

  public events: Array<Event> = [];

  public reading = false;

  public readEventData = {
    title: 'Lorem itsum sit doler',
    img: '/assets/stock/event.jpg',
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

  toggleRead(flag: boolean) {
    this.reading = flag;

    this.scroll2Top();
  }

  selectCluster(which: string) {
    this.activeCluster = which;

    this.events = [];
    for (const cluster of this.clusters) {
      if (which === 'all') {
        this.events = this.events.concat(cluster.events);
      } else if (cluster.value === which) {
        this.events = cluster.events;
        break;
      }
    }

    this.scroll2Top();
  }

  constructor() {}

  ngOnInit(): void {
    this.sortItems = [
      { label: 'Latest', value: 'latest' },
      { label: 'Oldest', value: 'oldest' },
      { label: 'Most views', value: 'views' },
      { label: 'Least views', value: 'views' },
    ];

    this.activeSort = 'latest';

    this.clusters = [
      {
        label: 'Industry',
        value: 'industry',
        events: []
      },
      {
        label: 'Government',
        value: 'government',
        events: []
      },
      {
        label: 'Academia',
        value: 'academia',
        events: []
      },
      {
        label: 'Public',
        value: 'public',
        events: []
      },
    ];
    this.clusterNav = [
      {
        label: 'All',
        name: 'all'
      },
      {
        label: 'Industry',
        name: 'industry'
      },
      {
        label: 'Government',
        name: 'government'
      },
      {
        label: 'Academia',
        name: 'academia'
      },
      {
        label: 'Public',
        name: 'public'
      }
    ];

    this.clusters.forEach(cluster => {
      for (let x = 0; x < 4; x++) {
        const event: Event = {
          imgPath: '/assets/stock/event.jpg',
          title: 'Lorem itsum sit doler',
          // tslint:disable-next-line: max-line-length
          brief: 'Quisque tincidunt semper orci sit amet volutpat. Proin eget pharetra neque. Morbi condimentum, tellus eget finibus aliquam, dui lacus pulvinar ipsum, non lobortis mi orci a leo. Nam vehicula neque vitae ante sagittis, a accumsan enim aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed mattis pretium tincidunt.',
          cluster,
          stats: [
            { icon: 'fas fa-eye', label: 'views', value: 33432 },
          ]
        };
        cluster.events.push(event);
      }

      this.events = this.events.concat(cluster.events);
    });

    this.activeCluster = this.clusterNav[0].name;
  }

}
