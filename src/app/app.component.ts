import { Component, ChangeDetectorRef, AfterViewChecked, AfterViewInit} from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import * as AOS from 'aos';

import { MasterService } from './services/master.service';

// mock auth
import { AuthService } from './services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  public navItems = [];
  public scrolled = false;
  public topnav;
  public footer;

  public breadcrumbItems: MenuItem[];
  public home = '/home';

  public loggedIn = true;

  public username = '';

  title = 'myras';

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

      /* this.loggedIn = this.auth.loggedIn(); */
      this.username = this.auth.getMemberInfo().username;
      
      
    });
  }

  ngAfterViewChecked() {
    this.breadcrumbItems = this.master.getBreadcrumbItems();

    console.log(this.breadcrumbItems);
    this.changeRef.detectChanges();
  }
}
