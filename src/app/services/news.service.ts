import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public getLatestNews(count) {
    return this.http.get<any>(`http://localhost:8080/db/myras/news/latest/${count}`);
  }

  constructor(private http: HttpClient) { }
}
