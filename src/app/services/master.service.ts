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

  public navItems = [
    {
      label: 'Home',
      path: 'home',
      active: false
    },
    {
      label: 'About',
      path: 'about',
      active: false
    },
    {
      label: 'Membership',
      path: 'membership',
      active: false
    },
    {
      label: 'Activities',
      path: 'activities',
      active: false
    },
    {
      label: 'Communities',
      path: 'communities',
      active: false
    }
  ];

  private topnav = {
    hide: false,
    active: [false, false, false, false, false]
  };

  public userSideBar = {
    hide: true,

    items: [
      {
        label: 'News',
        childs: [
          {
            label: 'Overview',
            path: 'user/news/overview',
            icon: 'fas fa-eye'
          },
          {
            label: 'Post',
            path: 'user/news/post',
            icon: 'fas fa-id-card'
          },
        ]
      },
      {
        label: 'User profile',
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
        label: 'Membership information',
        childs: [
          {
            label: 'Subscription',
            path: 'user/membership/subscription',
            icon: 'fas fa-users-cog'
          },
          {
            label: 'Membership card',
            path: 'user/membership/card',
            icon: 'fas fa-id-card'
          },
          /* {
            label: 'Directories',
            path: 'user/membership/directories',
            icon: 'fas fa-th-list'
          }, */
        ]
      }
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
        childs: [
          {
            label: 'Overview',
            path: 'admin/news/overview',
            icon: 'fas fa-clipboard-check'
          },
          {
            label: 'Post news',
            path: 'admin/news/post',
            icon: 'fas fa-share-square'
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
      }
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

    /* this.activeChanged.emit() */
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

  constructor(private router: Router, private auth: AuthService) {
    this.loadingSubject = new BehaviorSubject<boolean>(false);
    this.loading = this.loadingSubject.asObservable();

    this.registerFormSubject = new BehaviorSubject<boolean>(true);
    this.registerForm = this.registerFormSubject.asObservable();

    this.router.events.subscribe(val => {
      this.reset();
    });
  }
}
