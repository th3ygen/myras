import { Injectable, Output } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

import { MenuItem } from 'primeng/api';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 /*  @Output() activeChanged: EventEmitter = new EventEmitter(); */
  private loadingSubject: BehaviorSubject<boolean>;
  public loading: Observable<boolean>;

  private userUIObservable = new Subject<boolean>();
  private userUI = false;

  private registerFormSubject: BehaviorSubject<boolean>;
  public registerForm: Observable<boolean>;

  private currentTimeSubject: BehaviorSubject<string>;
  public currentTime: Observable<string>;

  private topnavToggleSubject: BehaviorSubject<boolean>;
  public topnavToggle: Observable<boolean>;

  public navItems = [
    {
      label: 'Home',
      path: 'home',
      active: false,
    },
    {
      label: 'Activities',
      path: 'activities',
      active: false,
      menu: [
        { label: 'Events', path: '/activities/events' },
        { label: 'Event calendar', path: '/activities/calendar', disabled: true },
        { label: 'Competitions', path: '/activities/competitions', disabled: true },
        { label: 'Global Certification Program', path: '/activities/gcp' },
      ]
    },
    {
      label: 'Communities',
      path: 'communities',
      active: false,
      menu: [
        { label: 'News', path: '/communities/news' },
        { label: 'Collaborations', path: '/communities/collab', disabled: true },
      ]
    },
    {
      label: 'Membership',
      path: 'membership',
      active: false,
      menu: [
        { label: 'Our membership package', path: '/membership' },
        { label: 'Register', path: 'register' },
        { label: 'Login', path: '/login' },
      ]
    },
    {
      label: 'About',
      path: 'about',
      active: false,
      menu: [
        { label: 'Our team', path: '/about/team' },
        { label: 'Contact us', path: '/about/contact' },
        { label: 'FAQ', path: '/about/faq' },
      ]
    }
  ];

  private topnav = {
    hide: false,
    active: [false, false, false, false, false],
  };

  public userSideBar = {
    hide: true,

    items: [
      {
        label: 'Dashboard',
        path: 'user/dashboard',
        icon: 'fas fa-solar-panel'
      },
      {
        label: 'Profile',
        childs: [
          {
            label: 'Personal informations',
            path: 'user/profile/info',
            icon: 'fas fa-info'
          },
          {
            label: 'Change password',
            path: 'user/profile/password',
            icon: 'fas fa-key'
          }
        ]
      },
      {
        label: 'Membership',
        childs: [
          {
            label: 'Subscription',
            path: 'user/membership/subscription',
            icon: 'fas fa-users-cog'
          },
          {
            label: 'Card',
            path: 'user/membership/card',
            icon: 'fas fa-id-card'
          }
        ]
      },
      {
        label: 'Purchase',
        childs: [
          {
            label: 'Invoices',
            path: 'user/purchase/invoices',
            icon: 'fas fa-list-ul'
          },
          {
            label: 'Orders',
            path: 'user/purchase/orders',
            icon: 'fas fa-money-check-alt'
          }
        ]
      },
    ]
  };
  public adminSideBar = {
    hide: true,

    items: [
      {
        label: 'Dashboard',
        path: 'admin/dashboard',
        icon: 'fas fa-solar-panel'
      },
      {
        label: 'News',
        path: 'admin/dashboard',
        icon: 'fas fa-share-square'
      },
      {
        label: 'Events',
        path: 'admin/dashboard',
        icon: 'fas fa-share-square'
      },
      {
        label: 'Members',
        path: 'admin/dashboard',
        icon: 'fas fa-share-square'
      },
      /* {
        label: 'News',
        childs: [
          {
            label: 'Post news',
            path: 'admin/news/post',
            icon: 'fas fa-share-square'
          },
        ]
      },
      {
        label: 'Content editor',
        childs: [
          {
            label: 'Home',
            path: 'admin/contentedit/home',
            icon: 'fas fa-home'
          },
          {
            label: 'Activities',
            path: 'admin/contentedit/activities',
            icon: 'fas fa-tasks'
          },
          {
            label: 'Communities',
            path: 'admin/contentedit/communities',
            icon: 'fas fa-users'
          },
          {
            label: 'Membership',
            path: 'admin/contentedit/membership',
            icon: 'fas fa-users-cog'
          },
          {
            label: 'About',
            path: 'admin/contentedit/about',
            icon: 'fas fa-info-circle'
          },
          {
            label: 'Footer',
            path: 'admin/contentedit/footer',
            icon: 'fas fa-bars'
          },
        ]
      }, 
      {
        label: 'Members',
        childs: [
          {
            label: 'Manager',
            path: 'admin/members/manager',
            icon: 'fas fa-tasks'
          },
          {
            label: 'Payments',
            path: 'admin/members/payments',
            icon: 'fas fa-money-bill-wave'
          },
        ]
      },*/
    ]
  };

  private footer = {
    hide: false
  };

  private bcItems: MenuItem[];

  public getBreadcrumbItems(): MenuItem[] {
    return this.bcItems;
  }

  public setBreadcrumbItems(items: MenuItem[] ) {
    this.bcItems = items;
  }

  public getTopnavAttr() {
    return this.topnav;
  }

  public getFooterAttr() {
    return this.footer;
  }

  public setUserUI(show) {
    this.userUI = show;

    this.userUIObservable.next(this.userUI);
  }

  public getUserUI() {
    return this.userUIObservable;
  }

  public hideTopnav(flag: boolean) {
    this.topnav.hide = flag;
  }
  public hideFooter(flag: boolean) {
    this.footer.hide = flag;
  }

  public setActive(index: number) {
    this.navItems.forEach(e => {
      e.active = false;
    });
    this.navItems[index].active = true;
  }

  private reset() {
    if (this.topnav.hide) {
      this.topnav.hide = false;
    }
    if (this.footer.hide) {
      this.footer.hide = false;
    }
  }

  public setLoading(flag: boolean) {
    this.loadingSubject.next(flag);
  }

  public get getLoading(): boolean {
    return this.loadingSubject.value;
  }

  public setRegisterForm(flag) {
    this.registerFormSubject.next(flag);
  }

  public get getRegisterForm() {
    return this.registerFormSubject.value;
  }

  public toggleTopnav(flag: boolean) {
    this.topnavToggleSubject.next(flag);
  }

  constructor(private router: Router, private auth: AuthService) {
    this.loadingSubject = new BehaviorSubject<boolean>(false);
    this.loading = this.loadingSubject.asObservable();

    this.registerFormSubject = new BehaviorSubject<boolean>(true);
    this.registerForm = this.registerFormSubject.asObservable();

    this.topnavToggleSubject = new BehaviorSubject<boolean>(false);
    this.topnavToggle = this.topnavToggleSubject.asObservable();

    this.router.events.subscribe(val => {
      this.reset();
    });
  }
}
