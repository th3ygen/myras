import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-page-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class PageMembershipComponent implements OnInit {
  public plans = [];
  public user;
  public rPassword = '';

  public acceptTerm = false;

  public plan = '';
  public dob: Date;

  public items = [];
  public currentIndex = 0;
  public progress = {width: '0%'};

  public showDialog = false;

  public dismis = true;

  constructor(private master: MasterService, private headerService: PageHeaderServiceService, private auth: AuthService) { }

  toggleDialog() {
    this.showDialog = !this.showDialog;
  }

  nextPage() {
    this.currentIndex = (this.currentIndex > 3) ? 3 : this.currentIndex + 1;
    this.progress = {width: `${(100 / (this.items.length - 1)) * this.currentIndex}%`};

    this.items.forEach(e => {
      e.active = false;
    });

    this.items[this.currentIndex].active = true;
  }

  submit() {
    this.auth.register(this.user).subscribe(done => {
      alert('Account created');
      this.nextPage();
    });
  }

  submitAccount() {
    if (!this.user.username) {
      return alert('Username cannot be blank');

    }

    if (!this.user.email) {
      return alert('Email cannot be blank');

    }

    if (!this.user.password) {
      return alert('Password cannot be blank');

    }

    if (this.user.password.length < 7) {
      return alert('Password must have atleast 8 characters');
    }

    if (!(this.user.password === this.rPassword)) {
      return alert('Password does not match');

    }

    if (!this.acceptTerm) {
      return alert('Please accept our term and conditions first');
    }


    this.nextPage();
  }

  selectPlan(plan) {
    this.user.membership.plan = plan;

    this.nextPage();
  }

  ngOnInit() {
    


    this.user = {

      username: '',
      email: '',

      password: '',

      membership: {
          plan: '',
          status: '',
          paid: '',
      },

      details: {
          fullname: '',
          dob: '',
          phoneNum: '',
          address: '',

          student: {
              university: '',
              course: '',
          },

          regular: {
              cluster: '',
              org: '',
              occu: '',
              web: '',
          },

          corp: {
              cluster: '',

              company: '',
              business: '',
              phoneNum: '',

              represent: {
                  name: '',
                  job: '',
                  phone: '',
              }
          },
      }
    };

    this.master.setActive(2);

    this.headerService.setHeader('Membership');
    this.headerService.setBody('Morbi ac lacinia leo');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'Membership', url: '/membership'}
    ]);

    this.items = [
      {
        label: 'SUBSCRIPTION',
        icon: 'fas fa-shopping-cart',
        active: true
      },
      {
        label: 'ACCOUNT DETAILS',
        icon: 'fas fa-calendar-check',
        active: false
      },
      {
        label: 'PERSONAL INFORMATION',
        icon: 'fas fa-user-check',
        active: false
      },
      {
        label: 'PAYMENT DETAILS',
        icon: 'fas fa-credit-card',
        active: false
      }
    ];

    this.progress = {width: `${(100 / (this.items.length - 1)) * this.currentIndex}%`};
  }

}
