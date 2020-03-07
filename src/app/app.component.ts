import { Component, ChangeDetectorRef, OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import * as AOS from 'aos';

import { MasterService } from './services/master.service';

// sidebar
import { SidebarItem, SidebarItems } from './configs/sidebar.config';

// mock auth
import { User } from './models/user';
import { AuthService } from './services/auth.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit {
  public sidebar;
  public navItems = [];
  public scrolled = false;
  public topnav;
  public footer;

  public userUI = false;

  public breadcrumbItems: MenuItem[];
  public home = '/home';

  public loggedIn = false;

  public currentUser;
  public username;

  public loading = true;

  title = 'myras';

  public navigate(url) {
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.master.setLoading(true);
    this.auth.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;

        if (this.currentUser.admin) {
          this.sidebar = this.master.adminSideBar;
        } else {
          this.sidebar = this.master.userSideBar;
        }

      }
      this.master.setLoading(false);
    });
    this.master.getUserUI().subscribe(flag => {
      this.userUI = flag;
    });
  }

  public logout() {
    this.auth.logout();
  }

  constructor( private auth: AuthService, public master: MasterService, private changeRef: ChangeDetectorRef, private router: Router) {
    AOS.init();

    window.addEventListener('scroll', () => {
      this.scrolled = (window.scrollY > 0);
    }, true);

    this.navItems = this.master.navItems;

    this.topnav = this.master.getTopnavAttr();
    this.footer = this.master.getFooterAttr();

    this.breadcrumbItems = this.master.getBreadcrumbItems();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      window.scrollTo(0, 0);

      this.currentUser = this.auth.currentUserValue;
    });
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    this.breadcrumbItems = this.master.getBreadcrumbItems();

    this.changeRef.detectChanges();
  }
}
