import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
        this.router.navigate(['/admin/home']);
      } else {
        this.router.navigate(['/user/profile']);
      }
    }
  }

  private validate(){
    if (!this.username) {
      alert('Username is empty');
      return false;
    }
    if (!this.password) {
      alert('Password is empty');
      return false;
    }

    return true;
  }

  public login() {
    if (this.validate()) {
      this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        user => {
          if (user.admin) {
            this.router.navigate(['/admin/home']);
          } else {
            /* console.log(user); */

            this.router.navigate(['/user/news/add']);
          }
        },

        error => {
          this.error = error;
        }
      );
    }

  }

  ngOnInit() {
    this.master.hideTopnav(true);
    this.master.hideFooter(true);
  }

}
