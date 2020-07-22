import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class PageLoginComponent implements OnInit, AfterViewInit {
  @ViewChild('inputUsername') inputUsername: ElementRef;
  @ViewChild('inputPassword') inputPassword: ElementRef;
  @ViewChild('btnSubmit') btnSubmit: ElementRef;


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
        this.router.navigate(['/user/dashboard']);
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
        res => {
          const user = res.user;

          if (user) {
            this.master.setLoading(false);
            if (user.role === 'admin') {
              this.router.navigate(['/admin/dashboard']);
            } else {
              this.router.navigate(['/user/dashboard']);
            }
          } else {
            this.master.setLoading(false);

            alertify.error('Username and password does not match');
          }
        }
      );
    }

  }

  close(): void {
    this.router.navigate(['/home']);
  }

  private onKeyEnter(): void {
    const submit = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.btnSubmit.nativeElement.click();
      }
    };

    this.inputUsername.nativeElement.addEventListener('keyup', submit);
    this.inputPassword.nativeElement.addEventListener('keyup', submit);
  }

  ngAfterViewInit(): void {
    this.onKeyEnter();
  }

  ngOnInit() {
    this.master.hideTopnav(true);
    this.master.hideFooter(true);
  }

}
