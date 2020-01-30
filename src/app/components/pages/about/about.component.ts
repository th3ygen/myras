import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';

import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class PageAboutComponent implements OnInit {

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  ngOnInit() {
    this.master.setActive(1);

    this.headerService.setHeader('About');
    this.headerService.setBody('Get In Touch With Us');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'About', url: '/about'}
    ]);
  }

}
