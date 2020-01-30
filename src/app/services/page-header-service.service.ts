import { Injectable } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderServiceService {
  private header: string;
  private body: string;
  private desc: string;

  private bcitems: MenuItem[];

  public getBreadcrumbItems(): MenuItem[] {
    return this.bcitems;
  }

  public setBreadcrumbItems(items: MenuItem[] ) {
    this.bcitems = items;
  }

  public getHeader(): string {
    return this.header;
  }

  public getBody(): string {
    return this.body;
  }

  public getDescription(): string {
    return this.desc;
  }

  public setHeader(str: string) {
    this.header = str;
  }

  public setBody(str: string) {
    this.body = str;
  }

  public setDescription(str: string) {
    this.desc = str;
  }

  constructor() { }
}
