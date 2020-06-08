import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectItem } from 'primeng/api';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

interface News {
  heading: string;
  imgPath: string;

  cluster: string;

  author: string;

  datePublish: string;
  views: number;
}

@Component({
  selector: 'app-page-communities-news',
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
        ),
        transition(
          ':leave', [
            style({
              opacity: 1
            }),
            animate(
              '.3s ease-out',
              style({
                opacity: 0
              })
            )
          ]
        ),
      ]
    ),
    trigger(
      'highlightInOut', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease-out', style({ opacity: 1 })),
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('700ms ease-out', style({ opacity: 0 }))
        ])
      ]
    ),
  ],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']

})
export class PageCommunitiesNewsComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;

  public highlights: Array<News> = [];
  public activeHighlight = 0;

  public clusters: SelectItem[];
  public time: SelectItem[];

  public selectedCluster: SelectItem;
  public selectedTime: SelectItem;

  public reading = false;

  public readEventData = {
    title: 'Aenean magna nisi, porta in turpis et, ultrices euismod ipsum',
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

  toggleRead(flag: boolean) {
    this.reading = flag;

    window.scrollTo({
      top: this.content.nativeElement.offsetTop,
      behavior: 'smooth'
    });
  }

  constructor() {}

  ngOnInit(): void {
    for (let x = 0; x < 4; x++) {
      this.highlights.push({
        heading: `[${x}]` + 'Aenean magna nisi, porta in turpis et, ultrices euismod ipsum',
        imgPath: '/assets/stock/event.jpg',

        cluster: 'Academia',

        author: 'MyRAS',

        datePublish: '3 Jan 2731',
        views: 100
      });
    }

    this.highlights[1].imgPath = '/assets/stock/event1.jpeg';
    this.highlights[3].imgPath = '/assets/stock/event1.jpeg';

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

    // update highlight
    setInterval(() => {
      this.activeHighlight = (this.activeHighlight + 1) % this.highlights.length;
    }, 3000);
  }

}
