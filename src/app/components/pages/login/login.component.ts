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
  @ViewChild('username', {static: true}) username: ElementRef;
  @ViewChild('password', {static: true}) password: ElementRef;

  public error = '';
  private returnUrl = '';

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

  tick(val) {
    this.rememberUser = val;
  }

  public login() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    this.auth.login(username, password)
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

    /* this.auth.login(username, password).subscribe(res => {
      const user = res.user;

      if (user.admin) {
        this.router.navigateByUrl('admin/home');
      } else {
        this.router.navigateByUrl('user/membership');
      }
    }); */

  }

  ngOnInit() {
    this.master.hideTopnav(true);
    this.master.hideFooter(true);

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

}
