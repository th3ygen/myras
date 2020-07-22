import { Component, ChangeDetectorRef, OnInit, AfterViewChecked, AfterViewInit, Input, ViewChild, ElementRef} from '@angular/core';
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
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @ViewChild('topmenu') topmenu: ElementRef;

  public sidebar;
  public navItems = [];
  public scrolled = false;
  public topnav;
  public footer;
  public popupVideo = false;

  public userUI = false;

  public breadcrumbItems: MenuItem[];
  public home = '/home';

  public loggedIn = false;

  public currentUser;
  public username;

  public showSidebar = true;

  public loading = true;

  title = 'myras';

  public currentNavMenu = '';
  public currentUrl = '';

  public navigate(url) {
    this.router.navigateByUrl(url);
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  public togglePopupVideo(flag: boolean) {
    this.master.togglePopupVideo(flag);
  }

  ngOnInit() {
    this.master.setLoading(true);

    this.auth.currentUser.subscribe(user => {
      if (user) {
        this.currentUser = user;

        if (this.currentUser.role === 'admin') {
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
    window.location.reload();
  }

  public async navClick(e) {
    const target = e.target.children[0].innerHTML;

    const asyncFind = () => {
      return new Promise(resolve => {
        resolve(this.navItems.find(item => item.label === target));
      });
    };

    const navItem: any = await asyncFind();

    if (navItem.menu) {
      this.currentNavMenu = target;
    } else {
      this.router.navigate([navItem.path]);
      this.currentNavMenu = '';
    }
  }

  public menuNavigate(path: string, disabled: boolean) {
    if (path === 'register') {
      return this.master.setRegisterForm(false);
    }

    if (!disabled) {
      this.currentNavMenu = '';
      this.router.navigate([path]);
    }
  }

  public navLeave() {
    this.currentNavMenu = '';
  }

  private updateTopnav() {
    /* this.master.toggleTopnav(((window.scrollY > 0) || (this.currentUrl !== '/home') && (this.currentUrl !== '/'))); */
    this.master.toggleTopnav(((window.scrollY > 0) || (this.currentUrl === '/404')));
  }

  constructor( private auth: AuthService,
               public master: MasterService,
               private changeRef: ChangeDetectorRef,
               private router: Router ) {

    AOS.init();

    this.navItems = this.master.navItems;

    this.topnav = this.master.getTopnavAttr();
    this.footer = this.master.getFooterAttr();

    this.master.topnavToggle.subscribe(flag => {
      this.scrolled = flag;
    });
    this.master.popupVideoToggle.subscribe(flag => {
      this.popupVideo = flag;
    });

    this.breadcrumbItems = this.master.getBreadcrumbItems();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      window.scrollTo(0, 0);

      this.currentUser = this.auth.currentUserValue;
      this.currentUrl = this.router.url;

      this.updateTopnav();
    });

    window.addEventListener('scroll', () => {
        this.updateTopnav();
    }, true);
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    this.breadcrumbItems = this.master.getBreadcrumbItems();

    this.changeRef.detectChanges();
  }
}
