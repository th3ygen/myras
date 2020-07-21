import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { MasterService } from '../../../../../services/master.service';
import { AuthService } from '../../../../../services/auth.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-page-user-profile-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PageUserProfilePasswordComponent implements OnInit {
  public user: any;
  public currentPw = '';
  public newPW = '';
  public conPW = '';

  public updated = false;
  constructor( private master: MasterService, private auth: AuthService ) { }

  validateNewPw() {
    return this.newPW === this.conPW;
  }

  updatePw() {
    if (!this.validateNewPw()) {
      return console.log('password doesn\'t match');
    }

    this.master.setLoading(true);
    this.auth.updatePassword(this.currentPw, this.newPW).toPromise()
      .then(res => {
        if (res.user) {
          this.master.setLoading(false);
          alertify.success('Password updated, refreshing page...');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          alertify.error('Wrong current password');
          this.master.setLoading(false);
        }
      }).catch(err => {
        this.master.setLoading(false);
        console.log('error!', err);
      });
  }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;
    /* this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]); */
  }

}
