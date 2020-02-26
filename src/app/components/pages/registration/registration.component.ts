import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class PageRegistrationComponent implements OnInit {
  public items = [
    {
      name: 'Regular'
    },
    {
      name: 'Student'
    },
    {
      name: 'Corporate'
    },
  ];

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  ngOnInit() {
    this.master.setActive(3);

    this.headerService.setHeader('Pricing');
    this.headerService.setBody('Morbi ac lacinia leo');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'Pricing', url: '/pricing'}
    ]);
  }

}
