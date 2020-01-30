import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class PageActivitiesComponent implements OnInit {

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  ngOnInit() {
    this.master.setActive(3);

    this.headerService.setHeader('Activities');
    this.headerService.setBody('Morbi ac lacinia leo');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'Activities', url: '/activities'}
    ]);
  }

}
