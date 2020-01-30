import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss']
})
export class PageCommunitiesComponent implements OnInit {

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  ngOnInit() {
    this.master.setActive(4);

    this.headerService.setHeader('Communities');
    this.headerService.setBody('Morbi ac lacinia leo');
    this.headerService.setDescription('Morbi ac lacinia leo. Morbi auctor tortor id ante pharetra, sit amet tincidunt tellus lacinia.');
    this.headerService.setBreadcrumbItems([
      {label: 'Communities', url: '/communities'}
    ]);
  }

}
