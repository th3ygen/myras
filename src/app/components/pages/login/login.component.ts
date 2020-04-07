import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as alertify from 'alertifyjs';

import { first } from 'rxjs/operators';

import { MasterService } from '../../../services/master.service';

// mock authentication service
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class PageLoginComponent implements OnInit {
  public username: string;
  public password: string;

  public error = '';

  public rememberUser = false;

  constructor(private master: MasterService, private router: Router, private route: ActivatedRoute, private auth: AuthService) {
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
      if (currentUser.admin) {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/user/profile/info']);
      }
    }
  }

  register(): void {
    this.master.setRegisterForm(false);
  }

  private validate() {
    if (!this.username) {
      alertify.error('Username is empty');
      return false;
    }
    if (!this.password) {
      alertify.error('Password is empty');
      return false;
    }

    return true;
  }

  public login() {
    if (this.validate()) {
      this.master.setLoading(true);
      this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        user => {
          this.master.setLoading(false);
          if (user.admin) {
            this.router.navigate(['/admin/dashboard']);
          } else {
            this.router.navigate(['/user/profile/info']);
          }
        },

        error => {
          this.master.setLoading(false);

          this.error = error;
          if (error === 'Unauthorized') {
            alertify.error('Username and password does not match');
          }
        }
      );
    }

  }

  close(): void {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.master.hideTopnav(true);
    this.master.hideFooter(true);
  }

}
