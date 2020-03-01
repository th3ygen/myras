import { Injectable, Output } from '@angular/core';

import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 /*  @Output() activeChanged: EventEmitter = new EventEmitter(); */
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

  private userSideBar = {
    hide: true,

    items: [
      {
        label: 'Membership information',
        child: [
          {
            label: 'Subscription information',
            path: 'user/membership/subscription'
          },
          {
            label: 'Membership card',
            path: 'user/membership/card'
          },
          {
            label: 'Directories',
            path: 'user/membership/directories'
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

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      this.reset();
    });
  }
}
