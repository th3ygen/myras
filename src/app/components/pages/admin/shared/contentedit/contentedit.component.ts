import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

class Page {
  title: string;
  cards: [{
    header: {
      label: string,
      haveSearch: boolean
    },

    body: {
      table: {
        headers: [{
          label: string,
          haveSearch: boolean
        }]
      }
    }
  }];
}

@Component({
  selector: 'app-admin-shared-contentedit',
  templateUrl: './contentedit.component.html',
  styleUrls: ['./contentedit.component.scss']
})

export class AdminSharedContenteditComponent implements OnInit {
  public pages: Array<Page>;
  public page: string;

  public editor = {
    home: []
  };

  constructor(private router: Router) {}

  initPages(): void {
    /* this.pages.push({
      title: 'Home',
      cards: [
        {
          header: {
            label: 'Section #1',
            haveSearch: false
          },

          body: {
            table: {
              headers: [
                {
                  label: 
                }
              ]
            }
          }
        }
      ]
    }); */
  }

  ngOnInit(): void {
    const urlItem = this.router.url.split('/');
    this.page = urlItem[urlItem.length - 1];
  }

}
