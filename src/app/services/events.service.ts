import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ROUTE_CONFIG } from '../configs/api.config';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public static ITEM_PER_PAGE = 10;

  public query(cluster: string, keys: string, q: Array<string>) {
    const queries = `cluster=${cluster}&keywords=${keys}&sort=${q[0]}&order=${q[1]}&limit=${EventsService.ITEM_PER_PAGE}&page=1`;

    return this.http.get<any>(`${ROUTE_CONFIG.events.query}?${queries}`).toPromise();
  }

  public getEventById(id: string) {
    const body = { id };
    return this.http.post<any>(ROUTE_CONFIG.events.getById, body).toPromise();
  }

  public getEvents(title: string, keywords: string, page: number) {
    const queries = `title=${title}&keywords=${keywords}&limit=${EventsService.ITEM_PER_PAGE}&page=${page}`;

    return this.http.get<any>(`http://localhost:8080/api/events/get?${queries}`).toPromise();
  }

  public getTotalEvents() {
    return this.http.get<any>(ROUTE_CONFIG.events.getTotalEvents).toPromise();
  }

  public deleteEventById(id: string) {
    const body = { id };
    return this.http.post<any>(ROUTE_CONFIG.events.delete, body).toPromise();
  }

  constructor( private http: HttpClient ) { }
}
