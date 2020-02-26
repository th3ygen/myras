import { Component, ChangeDetectorRef, OnInit, AfterViewChecked, AfterViewInit} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import * as AOS from 'aos';

import { MasterService } from './services/master.service';

// sidebar
import { SidebarItem, SidebarItems } from './configs/sidebar.config';

// mock auth
import { User } from './mockup/user';
import { AuthService } from './services/auth.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  public sidebarItems: SidebarItem[] = SidebarItems;
  public navItems = [];
  public scrolled = false;
  public topnav;
  public footer;

  public breadcrumbItems: MenuItem[];
  public home = '/home';

  public loggedIn = false;

  public currentUser: User;
  public username;

  title = 'myras';

  public navigate(url) {
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
    this.currentUser = this.auth.getCurrentUser();
    if (this.currentUser) {
      this.username = this.currentUser.getUsername();
      this.loggedIn = true;
    }
  }

  constructor( private auth: AuthService, private master: MasterService, private changeRef: ChangeDetectorRef, private router: Router) {
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

      /* this.currentUser = this.auth.getCurrentUser();
      this.username = this.currentUser.getUsername();
      if (this.currentUser) {
        this.loggedIn = true;
      } */

    });
  }

  ngAfterViewChecked() {
    
    this.breadcrumbItems = this.master.getBreadcrumbItems();

    this.changeRef.detectChanges();
  }
}
