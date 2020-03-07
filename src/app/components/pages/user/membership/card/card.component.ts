import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../../../services/master.service';


@Component({
  selector: 'app-page-user-membership-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PageUserMembershipCardComponent implements OnInit {

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]);
  }

}
