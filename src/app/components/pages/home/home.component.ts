import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MasterService } from '../../../services/master.service';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PageHomeComponent implements OnInit {
  public showDialog = false;

  public carousel = {
    responsive: [
      {
        breakpoint: '1680px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1536px',
        numVisible: 2,
        numScroll: 1
      }
    ]
  };
  public headerContentIndex = 3;
  public headerContent = [
    {
      title: 'About',
      body: 'Curabitur accumsan dui magna',
      brief: 'Integer sodales dignissim ex, congue semper nisi euismod id',
      svg: '../../../../assets/svg/undraw_location_search_bqps.svg',
      path: 'about'
    },
    {
      title: 'Membership',
      body: 'Donec sit amet viverra nisi',
      brief: 'Aenean diam metus, vehicula at turpis maximus, tincidunt',
      svg: '../../../../assets/svg/undraw_sign_in_e6hj.svg',
      path: 'membership'
    },
    {
      title: 'Activities',
      body: 'Morbi venenatis nulla sit',
      brief: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
      svg: '../../../../assets/svg/undraw_quiz_nlyh.svg',
      path: 'activities'
    },
    {
      title: 'Communities',
      body: 'Collaboration with global cluster',
      brief: 'To promote the advancement of the robotics and automation industry',
      svg: '../../../../assets/svg/untitled.svg',
      path: 'communities'
    }
  ];

  public news: any[] = [];
  public loaded = false;

  

  routeTo(path: string) {
    this.router.navigateByUrl(path);
  }

  headerNext() {
    this.headerContentIndex = (this.headerContentIndex === 3) ? 0 : this.headerContentIndex + 1;
  }
  headerPrev() {
    this.headerContentIndex = (this.headerContentIndex === 0) ? 3 : this.headerContentIndex - 1;
  }

  constructor(private master: MasterService, private router: Router, private newsService: NewsService) {
  }

  public loadNews() {
    this.newsService.getLatestNews(10).subscribe(data => {
      data.forEach(e => {
        this.news.push({
          title: e.header,
          desc: e.description,
          img: `http://localhost:8080${e.imgURL}`
        });
      });
      this.loaded = true;
    });

  }

  ngOnInit() {
    this.loadNews();
    this.master.setActive(0);
  }

}
