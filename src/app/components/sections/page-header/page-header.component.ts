import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-section-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class SectionPageHeaderComponent implements OnInit {

  public header: string;
  public body: string;
  public desc: string;

  public breadcrumbItems: MenuItem[];
  public home: MenuItem;


  constructor(private headerService: PageHeaderServiceService) { }

  ngOnInit() {
    this.header = this.headerService.getHeader();
    this.body = this.headerService.getBody();
    this.desc = this.headerService.getDescription();

    this.home = {icon: 'fa fa-home', url: '/home'};
    this.breadcrumbItems = this.headerService.getBreadcrumbItems();
  }

}
