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

@Component({
  selector: 'app-page-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class PageCommunitiesComponent implements OnInit {
  public news: News[];
  public newsIndex = 0;
  public newsTotal = 0;

  public autoPlay = true;
  public autoPlayInterval = 5000;

  constructor(public master: MasterService, private headerService: PageHeaderServiceService, private newsService: NewsService) { }


  switchPage(e): void {
    /* console.log(e); */

  }

  switchNews(x): void {
    this.newsIndex = x;
  }

  initAutoPlay() {
    if (this.autoPlay) {
      setInterval(() => {
        this.newsIndex = (this.newsIndex + 1) % this.newsTotal;
      }, this.autoPlayInterval);
    }
  }

  ngOnInit() {
    this.master.setLoading(true);

    this.newsService.getLatestNews(10).subscribe(n => {
      let latestNews: News[] = [];
      if (n.length) {
        n.forEach((e, x) => {
          if (e) {
            latestNews.push({
              header: e.header,
              brief: e.description,
              img: e.imgURL,
    
              index: x
            });
    
            this.newsTotal++;
          }
          
        });
        this.news = latestNews;
      }
      
      this.master.setLoading(false);


      /* this.initAutoPlay(); */
    });



    this.master.setActive(2);

    this.headerService.setHeader('Communities');
    this.headerService.setBody('Collaboration With Global Cluster');
    this.headerService.setDescription('To promote the advancement of the robotics and automation industry.');
    this.headerService.setBreadcrumbItems([
      {label: 'Communities', url: '/communities'}
    ]);
  }

}
