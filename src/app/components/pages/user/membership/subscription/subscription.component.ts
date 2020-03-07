import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../../../services/master.service';

@Component({
  selector: 'app-page-user-membership-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class PageUserMembershipSubscriptionComponent implements OnInit {

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]);

  }

}
