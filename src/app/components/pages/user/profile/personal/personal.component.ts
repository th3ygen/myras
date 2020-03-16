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
  public username = '';
  public email = '';
  public plan = '';

  public fullname = '';
  public dob = '';
  public phone = '';

  public address = {
    line: '',
    city: '',
    state: '',
    zip: ''
  };

  public student = {
    id: '',
    university: '',
    course: ''
  };
  constructor(private auth: AuthService, private master: MasterService) { }

  ngOnInit(): void {
    this.master.setLoading(true);
    this.auth.currentUser.subscribe((user: any) => {
      this.auth.getUser(user.membership.id).subscribe(data => {
        this.username = data.username;
        this.email = data.email;
        this.plan = data.membership.plan;

        this.fullname = data.details.fullname;
        this.dob = data.details.dob;
        this.phone = data.details.phoneNum;

        this.address.line = data.details.address.line;
        this.address.city = data.details.address.city;
        this.address.state = data.details.address.state;
        this.address.zip = data.details.address.zip;

        this.student.id = data.details.student.stdId,
        this.student.university = data.details.student.university;
        this.student.course = data.details.student.course;

        this.master.setLoading(false);
      });
      
    });
  }

}
