import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

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

  public rememberUser = false;

  constructor(private master: MasterService, private router: Router, private auth: AuthService) { }

  tick(val) {
    this.rememberUser = val;

  }

  public login() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    if (this.auth.login(username, password)) {
      this.router.navigateByUrl('user/membership');
    }
  }

  ngOnInit() {
    this.master.hideTopnav(true);
    this.master.hideFooter(true);
  }

}
