import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class PageMembershipComponent implements OnInit {

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  items: MenuItem[];

  ngOnInit() {
    this.master.setActive(2);

    this.headerService.setHeader('Membership');
    this.headerService.setBody('Morbi ac lacinia leo');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'Membership', url: '/membership'}
    ]);
    this.items = [
      {label: 'SUBSCRIPTION'},
      {label: 'ACCOUNT DETAILS'},
      {label: 'PERSONAL INFORMATION'},
      {label: 'PAYMENT DETAILS'}
  ];
  }

}
