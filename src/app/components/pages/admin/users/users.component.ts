import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

interface Car {
  numb;
  fName;
  email;
  pNumb;
  adrs;
  uni;
  crs;
  payStatus;
}

@Component({
  selector: 'app-page-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
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

export class PageAdminUsersComponent implements OnInit {
  public cars: Car[] = [];
  public cols: any[];

  constructor() { }

  ngOnInit() {
    this.cars.push({
      numb: 1,
      fName: 'test',
      email: 'test',
      pNumb: 'test',
      adrs: 'test',
      uni: 'test',
      crs: 'test',
      payStatus: 'test'
    });
    this.cars.push({
      numb: 1,
      fName: 'test',
      email: 'test',
      pNumb: 'test',
      adrs: 'test',
      uni: 'test',
      crs: 'test',
      payStatus: 'test'
    });

    this.cols = [
      { field: 'numb', header: 'No.' },
      { field: 'fName', header: 'Full Name' },
      { field: 'email', header: 'Email' },
      { field: 'pNumb', header: 'Phone Number' },
      { field: 'payStatus', header: 'Status' }
    ];

  }

}
