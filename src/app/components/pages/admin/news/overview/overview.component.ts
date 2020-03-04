import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

interface Car {
  author;
  title;
  date;
  tags;
  category;
}

@Component({
  selector: 'app-page-admin-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]

})

export class PageAdminOverviewComponent implements OnInit {
  public cars: Car[] = [];
  public cols: any[];

  constructor() { }

  ngOnInit() {
    this.cars.push({
      author: 'test',
      title: 'test',
      date: 'test',
      tags: 'test',
      category: 'test'
    });
    this.cars.push({
      author: 'test1',
      title: 'test',
      date: 'test',
      tags: 'test',
      category: 'test'
    });

    this.cols = [
      { field: 'author', header: 'Author' },
      { field: 'title', header: 'Title' },
      { field: 'date', header: 'Date Published' },
      { field: 'tags', header: 'Tags' },
      { field: 'category', header: 'Category' },
      
    ];

  }

}
