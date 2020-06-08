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

  private popupVideoToggleSubject: BehaviorSubject<boolean>;
  public popupVideoToggle: Observable<boolean>;

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
        {
          label: 'Events',
          brief: 'Lorem ipsum doler sit amet for Events is doing great!',
          path: '/activities/events',
          icon: 'far fa-calendar-check'
        },
        {
          label: 'Event calendar',
          brief: 'Lorem ipsum doler sit amet for Event Calendar is doing great!',
          path: '/activities/calendar',
          icon: 'fas fa-cog',
          disabled: true
        },
        {
          label: 'Competitions',
          brief: 'Lorem ipsum doler sit amet for Competitions is doing great!',
          path: '/activities/competitions',
          icon: 'fas fa-cog',
          disabled: true
        },
        {
          label: 'Global Certification Program',
          brief: 'Lorem ipsum doler sit amet for GCP is doing great!',
          path: '/activities/gcp',
          icon: 'fas fa-award'
        },
      ]
    },
    {
      label: 'Communities',
      path: 'communities',
      active: false,
      menu: [
        {
          label: 'News',
          brief: 'Lorem ipsum doler sit amet for News is doing great!',
          path: '/communities/news',
          icon: 'far fa-newspaper'
        },
        {
          label: 'Collaborations',
          brief: 'Lorem ipsum doler sit amet for Collaborations is doing great!',
          path: '/communities/collab',
          icon: 'fas fa-cog',
          disabled: true
        },
      ]
    },
    {
      label: 'Membership',
      path: 'membership',
      active: false,
      menu: [
        {
          label: 'Pricings',
          brief: 'Lorem ipsum doler sit amet for Membership is doing great!',
          path: '/membership',
          icon: 'fas fa-user-tag'
        },
        {
          label: 'Register',
          brief: 'Lorem ipsum doler sit amet for Register is doing great!',
          path: 'register',
          icon: 'fas fa-user-plus'
        },
        {
          label: 'Login',
          brief: 'Lorem ipsum doler sit amet for Login is doing great!',
          path: '/login',
          icon: 'fas fa-user-lock'
        },
      ]
    },
    {
      label: 'About',
      path: 'about',
      active: false,
      menu: [
        {
          label: 'Our team',
          brief: 'Lorem ipsum doler sit amet for Out Team is doing great!',
          path: '/about/team',
          icon: 'fas fa-users'
        },
        {
          label: 'Contact us',
          brief: 'Lorem ipsum doler sit amet for Contact Us is doing great!',
          path: '/about/contact',
          icon: 'fas fa-phone'
        },
        {
          label: 'FAQ',
          brief: 'Lorem ipsum doler sit amet for FAQ is doing great!',
          path: '/about/faq',
          icon: 'far fa-lightbulb'
        },
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
        icon: 'fas fa-share-square',
        childs: [
          {
            label: 'All news',
            path: 'admin/news/all',
            icon: 'fas fa-share-square'
          },
          {
            label: 'New post',
            path: 'admin/news/post',
            icon: 'fas fa-share-square'
          },
        ]
      },
      {
        label: 'Events',
        icon: 'fas fa-share-square',
        childs: [
          {
            label: 'All events',
            path: 'admin/events/all',
            icon: 'fas fa-share-square'
          },
          {
            label: 'New event',
            path: 'admin/events/new',
            icon: 'fas fa-share-square'
          },
        ]
      },
      {
        label: 'Members',
        icon: 'fas fa-share-square',
        childs: [
          {
            label: 'All members',
            path: 'admin/members',
            icon: 'fas fa-share-square'
          },
          {
            label: 'New member',
            path: 'admin/members/new',
            icon: 'fas fa-share-square'
          },
          /* {
            label: 'New admin',
            path: 'admin/members/new/admin',
            icon: 'fas fa-share-square'
          }, */
          {
            label: 'Reset password',
            path: 'admin/members/resetpass',
            icon: 'fas fa-share-square'
          },
        ]
      },
      {
        label: 'Bills',
        icon: 'fas fa-share-square',
        childs: [
          {
            label: 'All bills',
            path: 'admin/bills/all',
            icon: 'fas fa-share-square'
          },
          {
            label: 'New bill',
            path: 'admin/bills/new',
            icon: 'fas fa-share-square'
          }
        ]
      },
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

  public togglePopupVideo(flag: boolean) {
    this.popupVideoToggleSubject.next(flag);
  }

  constructor(private router: Router, private auth: AuthService) {
    this.loadingSubject = new BehaviorSubject<boolean>(false);
    this.loading = this.loadingSubject.asObservable();

    this.registerFormSubject = new BehaviorSubject<boolean>(true);
    this.registerForm = this.registerFormSubject.asObservable();

    this.topnavToggleSubject = new BehaviorSubject<boolean>(false);
    this.topnavToggle = this.topnavToggleSubject.asObservable();

    this.popupVideoToggleSubject = new BehaviorSubject<boolean>(false);
    this.popupVideoToggle = this.popupVideoToggleSubject.asObservable();

    this.router.events.subscribe(val => {
      this.reset();
    });
  }
}
