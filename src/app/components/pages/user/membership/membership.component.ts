import { Component, OnInit } from '@angular/core';


import { MasterService } from '../../../../services/master.service';

@Component({
  selector: 'app-page-user-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class PageUserMembershipComponent implements OnInit {

  constructor(private master: MasterService) { }

  ngOnInit() {
    this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]);

  }

}
