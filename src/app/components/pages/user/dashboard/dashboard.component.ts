import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-page-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageUserDashboardComponent implements OnInit {
  public user: any;

  public events = [
    {
      title: 'event 1',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 2',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 3',
      date: Date.now(),
      daysRemaining: 0
    },
  ];

  public fullname = '';

  public notification = [];

  public accountStatus = {
    plan: '',
    status: '',
    exp: 65
  };

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;

    if (this.user) {
      this.auth.getUserInfo().toPromise().then(data => {
        const u = data.user;
        this.fullname = u.details.fullname;

        this.accountStatus = {
          plan: u.member.plan,
          status: u.member.status,
          exp: 0
        };
      }).catch(err => {
        console.log(err);
      });
    }
  }

}
