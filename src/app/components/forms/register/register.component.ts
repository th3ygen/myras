import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MasterService } from '../../../services/master.service';
import { AuthService } from '../../../services/auth.service';

import * as alertify from 'alertifyjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  public plans = [];
  public plan = '';
  public fee = 0;

  public items = [];
  public currentIndex = 0;
  public doneIndex = 0;
  public progress = {width: '0%'};

  public currentPageDone = false;

  public user;

  public acceptTerm;
  public rPassword;

  public btnText = 'Proceed';

  public hidden = true;

  public accountForm = {
    username: '',
    email: '',
    password: '',
    lifetime: true,
  };

  public contactInfoForm = {
    title: '',
    fullname: '',
    ic: '',
    dob: '',
    nationality: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    mobileNum: '',
  };

  public studentInfoForm = {
    university: '',
    studentId: '',
    course: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    country: '',
  };

  public companyInfoForm = {
    name: '',
    nature: '',
    sectors: [],
    jobTitle: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    country: '',
    officePhone: ''
  };

  public userTitles = [
    {label: 'Mr', value: 'Mr'},
    {label: 'Ms', value: 'Ms'},
    {label: 'Mrs', value: 'Mrs'},
    {label: 'Dato\'', value: 'Dato\''},
    {label: 'Datin', value: 'Datin'},
    {label: 'Other', value: 'other'},
  ];

  constructor(private router: Router, private master: MasterService, private auth: AuthService) { }

  public validateAccount(): any {
    const data = this.accountForm;
    if (data.username === '') {
      return {
        error: true,
        message: 'Username must be filled'
      };
    }

    if (data.email === '') {
      return {
        error: true,
        message: 'Email must be filled'
      };
    }

    if (data.password === '') {
      return {
        error: true,
        message: 'Password must be filled'
      };
    }

    if (data.password.length < 8) {
      return {
        error: true,
        message: 'Password must be atleast 8 characters long'
      };
    }

    if (data.password !== this.rPassword) {
      return {
        error: true,
        message: 'Password does not match'
      };
    }

    return {error: false};
  }

  public validateContact(): any {
    const data = this.contactInfoForm;
    if (data.fullname === '') {
      return {
        error: true,
        message: 'Fullname must be filled'
      };
    }

    if (data.ic === '') {
      return {
        error: true,
        message: 'IC must be filled'
      };
    }

    if (data.dob === '') {
      return {
        error: true,
        message: 'Date of birth must be filled'
      };
    }

    if (data.nationality === '') {
      return {
        error: true,
        message: 'Please state your nationality'
      };
    }

    if (data.address === '') {
      return {
        error: true,
        message: 'Address must be filled'
      };
    }

    if (data.city === '') {
      return {
        error: true,
        message: 'City must be filled'
      };
    }

    if (data.zip === '') {
      return {
        error: true,
        message: 'Post code must be filled'
      };
    }

    if (data.state === '') {
      return {
        error: true,
        message: 'State must be filled'
      };
    }

    if (data.country === '') {
      return {
        error: true,
        message: 'Country must be filled'
      };

    }

    if (data.mobileNum === '') {
      return {
        error: true,
        message: 'Mobile number must be filled'
      };
    }

    return {error: false};
  }

  public validateStudent(): any {
    const data = this.studentInfoForm;
    if (!this.plans[2].selected) {
      return {error: false};
    }

    if (data.university === '') {
      return {
        error: true,
        message: 'university must be filled'
      };
    }

    if (data.studentId === '') {
      return {
        error: true,
        message: 'Student Id must be filled'
      };
    }

    if (data.course === '') {
      return {
        error: true,
        message: 'Course must be filled'
      };
    }

    if (data.address === '') {
      return {
        error: true,
        message: 'Address must be filled'
      };
    }

    if (data.city === '') {
      return {
        error: true,
        message: 'City must be filled'
      };
    }

    if (data.zip === '') {
      return {
        error: true,
        message: 'Post code must be filled'
      };
    }

    if (data.state === '') {
      return {
        error: true,
        message: 'State must be filled'
      };
    }

    if (data.country === '') {
      return {
        error: true,
        message: 'Country must be filled'
      };
    }

    return {error: false};
  }

  public validateCompany(): any {
    const data = this.companyInfoForm;
    if (!this.plans[1].selected) {
      return {error: false};
    }

    if (data.name === '') {
      return {
        error: true,
        message: 'Company name must be filled'
      };
    }

    if (data.nature === '') {
      return {
        error: true,
        message: 'Nature of bussiness must be filled'
      };
    }

    if (data.jobTitle === '') {
      return {
        error: true,
        message: 'Job title must be filled'
      };
    }

    if (data.address === '') {
      return {
        error: true,
        message: 'Address must be filled'
      };
    }

    if (data.city === '') {
      return {
        error: true,
        message: 'City must be filled'
      };
    }

    if (data.zip === '') {
      return {
        error: true,
        message: 'Post code must be filled'
      };
    }

    if (data.state === '') {
      return {
        error: true,
        message: 'State must be filled'
      };
    }

    if (data.country === '') {
      return {
        error: true,
        message: 'Country must be filled'
      };
    }

    if (data.officePhone === '') {
      return {
        error: true,
        message: 'Office phone number must be filled'
      };
    }

    return {error: false};
  }

  public register() {
    const data = {
      username: this.accountForm.username,
      password: this.accountForm.password,

      email: this.accountForm.email,

      membership: {
        plan: this.plan,
        lifetime: this.accountForm.lifetime,
      },

      details: {
        title: this.contactInfoForm.title,
        fullname: this.contactInfoForm.fullname,
        ic: this.contactInfoForm.ic,
        nationality: this.contactInfoForm.nationality,
        dob: this.contactInfoForm.dob,
        phoneNum: this.contactInfoForm.mobileNum,

        address: {
          line: this.contactInfoForm.address,
          city: this.contactInfoForm.city,
          state: this.contactInfoForm.state,
          zip: this.contactInfoForm.zip,
          country: this.contactInfoForm.country
        },

        company: {
          name: this.companyInfoForm.name,
          nature: this.companyInfoForm.nature,
          sectors: this.companyInfoForm.sectors,
          jobTitle: this.companyInfoForm.jobTitle,
          address: {
            line: this.companyInfoForm.address,
            city: this.companyInfoForm.city,
            state: this.companyInfoForm.state,
            zip: this.companyInfoForm.zip,
            country: this.companyInfoForm.country
          }
        },

        student: {
          stdId: this.studentInfoForm.studentId,
          university: this.studentInfoForm.university,
          course: this.studentInfoForm.course,

          address: {
            line: this.studentInfoForm.address,
            city: this.studentInfoForm.city,
            state: this.studentInfoForm.state,
            zip: this.studentInfoForm.zip,
            country: this.studentInfoForm.country
          }
        }
      }
    };

    return this.auth.register(data);
  }

  nextPage(): void {
    if (this.doneIndex === 3) {
      this.master.setRegisterForm(false);
      this.router.navigate(['/login']);

      return;
    }

    let validate = { error: false, message: '' };
    switch (this.doneIndex + 1) {
      case 2:
        validate = this.validateAccount();
        if (validate.error) {
          alertify.error(validate.message);
          return;
        }

        break;

      case 3:
        validate = this.validateContact();
        if (validate.error) {
          alertify.error(validate.message);
          return;
        }

        validate = this.validateCompany();
        if (validate.error) {
          alertify.error(validate.message);
          return;
        }

        validate = this.validateStudent();
        if (validate.error) {
          alertify.error(validate.message);
          return;
        }

        break;
    }

    if (this.doneIndex < 2) {
      this.currentPageDone = false;
    }

    this.currentIndex  = (this.currentIndex >= 3) ? 3 : ++this.currentIndex;
    this.doneIndex = this.currentIndex;

    if (this.btnText === 'Login now') {
      this.router.navigate(['/login']);
    }

    if (this.btnText === 'Create account') {
      this.master.setLoading(true);
      this.register().subscribe(e => {
        this.master.setLoading(false);

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
      });
    } else {
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
    this.plan = this.plans[x].title;
    this.fee = this.plans[x].price;

    this.currentPageDone = true;
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
