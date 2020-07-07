import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-page-admin-events',
  templateUrl: './events.component.html',
  animations: [
    trigger(
      'overlayWrapper', [
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
        )
      ]
    )
  ],
  styleUrls: ['./events.component.scss']
})
export class PageAdminEventsComponent implements OnInit {
  public showOverlay = false;

  public totalEvents = 0;

  public title = '';
  public keywords = '';

  public events: any = [];
  constructor( private eventsService: EventsService ) { }

  toDate(timestamp: number) {
    const a = new Date(timestamp);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${a.getDate()} ${months[a.getMonth()]} ${a.getFullYear()}`;
  }

  toggleOverlay(flag: boolean) {
    this.showOverlay = flag;
  }

  refreshEvents(events: any) {
    for (const event of events) {
      event.keywords = event.keywords.split(',');
    }

    this.events = events;
  }

  async query() {
    const { events } = await this.eventsService.getEvents(this.title, this.keywords, 1);

    this.refreshEvents(events);
  }

  async deleteEvent(id: string) {
    this.toggleOverlay(true);
  }

  async changePage(e: any) {
    const { events } = await this.eventsService.getEvents(this.title, this.keywords, e.page + 1);

    this.refreshEvents(events);
  }

  async ngOnInit() {
    // get total events for pagination index
    const { total } = await this.eventsService.getTotalEvents();
    this.totalEvents = total;

    // load all events, paginated
    const { events } = await this.eventsService.getEvents('', '', 1);

    this.refreshEvents(events);
  }

}
