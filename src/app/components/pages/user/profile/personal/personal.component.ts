import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { AuthService } from '../../../../../services/auth.service';

import { MasterService } from '../../../../../services/master.service';

@Component({
  selector: 'app-page-user-profile-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PageUserProfilePersonalComponent implements OnInit {
  public user: any;

  public title = 'Mr.';

  public fullname = '';
  public prefname = '';
  public gender = '';
  public dob: Date;
  public phone = '';

  public contact = {
    email: '',
    altEmail: '',
    homePhone: '',
    mobilePhone: '',
    workPhone: ''
  };

  public bio = '';

  constructor(private auth: AuthService, private master: MasterService) { }

  updateInfo() {
    const info = {
      details: {
        title: this.title,
        fullname: this.fullname,
        dob: this.dob,
        phoneNum: this.contact.mobilePhone
      }
    };

    this.master.setLoading(true);
    this.auth.updateUserInfo(info).toPromise().then(() => {
      window.location.reload();
    })
    .catch(err => {
      console.log('err', err);
      this.master.setLoading(false);
    });
  }

  ngOnInit(): void {
    this.master.setLoading(false);
    this.user = this.auth.currentUserValue;

    if (this.user) {
      this.master.setLoading(true);
      this.auth.getUserInfo().subscribe(data => {
        const u = data.user;

        this.title = u.details.title;
        this.fullname = u.details.fullname;
        this.dob = new Date(u.details.dob);
        this.contact.email = u.email;
        this.contact.mobilePhone = u.details.phoneNum;

        this.master.setLoading(false);
      });
    }

    /* this.auth.currentUser.subscribe((user: any) => {
      this.master.setLoading(true);
      this.auth.getUser(user.membership.id).subscribe(data => {
        this.username = data.username;
        this.email = data.email;
        this.plan = data.membership.plan;

        this.fullname = data.details.fullname;
        this.dob = data.details.dob;
        this.phone = data.details.phoneNum;

        if (data) {
          this.master.setLoading(false);
        }
      });
    }); */
  }

}
