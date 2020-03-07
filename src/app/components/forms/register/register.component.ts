import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  public plans = [];

  public items = [];
  public currentIndex = 0;
  public doneIndex = 0;
  public progress = {width: '0%'};

  public user;

  public acceptTerm;
  public rPassword;

  public btnText = 'Proceed';

  public hidden = true;

  constructor(private router: Router, private master: MasterService) { }

  nextPage(): void {
    if (this.doneIndex === 3) {
      this.master.setRegisterForm(false);
      this.router.navigate(['/login']);

      return;
    }

    this.currentIndex  = (this.currentIndex >= 3) ? 3 : ++this.currentIndex;
    this.doneIndex = this.currentIndex;

    switch (this.doneIndex) {
      case 2:
        this.btnText = 'Create account';
        break;
      case 3:
        this.btnText = 'Login now';
        break;
    }

    this.progress = {width: `${(100 / (this.items.length - 1)) * this.currentIndex}%`};

    this.items.forEach(e => {
      e.active = false;
    });

    this.items[this.currentIndex].active = true;
  }

  selectPage(x) {
    if (x > this.doneIndex) {
      return;
    }

    this.currentIndex = x;
    this.items.forEach(e => {
      e.active = false;
    });

    this.items[this.currentIndex].active = true;
  }

  submitAccount() {

  }

  submit() {

  }

  selectPlan(x) {
    this.plans.forEach(e => {
      e.selected = false;
    });

    this.plans[x].selected = true;
  }

  close(): void {
    this.master.setRegisterForm(true);
  }

  reset() {
    this.currentIndex = 0;
    this.doneIndex = 0;

    this.progress = {width: `${(100 / (this.items.length - 1)) * this.currentIndex}%`};

    this.acceptTerm = false;
    this.rPassword = '';

    this.btnText = 'Proceed';

    this.plans.forEach(e => {
      e.selected = false;
    });

    this.items.forEach(e => {
      e.active = false;
    });

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
  }

  ngOnInit(): void {
    this.master.registerForm.subscribe(flag => {
      this.reset();
      this.hidden = flag;
    });

    this.plans.push({
      title: 'Regular',
      brief: 'Some brief description about the plan',

      selected: false,
      features: [
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
      ],

      price: 50,
    });
    this.plans.push({
      title: 'Corporate',
      brief: 'Some brief description about the plan',

      selected: false,
      features: [
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
      ],

      price: 200,
    });
    this.plans.push({
      title: 'Student',
      brief: 'Some brief description about the plan',

      selected: false,
      features: [
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
        'You will gain this feature!',
      ],

      price: 0,
    });

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

    this.reset();
  }

}
