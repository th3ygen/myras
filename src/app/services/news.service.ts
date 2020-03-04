import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public postNews(header: string, description: string, tags: string, img: File, content: string) {
    const authorId = '90as8d098q90asdasd';
    const author = 'Aidil Syazwan';

    const timestamp = Date.now();

    const data = {
      authorId,
      author,
      header,
      description,
      tags,
      content,
      timestamp
    };

    const formData = new FormData();
    formData.append('img', img, img.name);
    formData.append('data', JSON.stringify(data));
    return this.http.post<any>('http://localhost:8080/api/news/add', formData);
  }

  public getLatestNews(count) {
    return this.http.get<any>(`http://localhost:8080/api/news/latest/${count}`);
  }

  constructor(private http: HttpClient) { }
}
