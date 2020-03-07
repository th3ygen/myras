import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { MasterService } from '../../../../../services/master.service';

@Component({
  selector: 'app-page-user-profile-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PageUserProfilePasswordComponent implements OnInit {

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]);
  }

}
