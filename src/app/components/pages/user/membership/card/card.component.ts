import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { MasterService } from '../../../../../services/master.service';


@Component({
  selector: 'app-page-user-membership-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PageUserMembershipCardComponent implements OnInit, AfterViewInit {
  @ViewChild('svg') svg: ElementRef;

  public info = [
    ['firstname', 'Muhd. Aidil Syazwan'],
    ['role', 'Member'],
    ['membership', 'STUDENT'],
    ['mobile number', '+601136528296'],
    ['email', 'th3ygen@myras.org'],
    ['line 1', 'No. 114'],
    ['line 2', 'Kg Kroh Hilir'],
    ['city', 'Padang Rengas'],
    ['postcode', '33700'],
    ['state', 'Perak'],
  ];

  constructor(private master: MasterService) { }

  async ngAfterViewInit() {
    const a = this.svg.nativeElement;

    const svgLoad = () => {
      return new Promise(resolve => {
        a.onload = () => {
          a.contentDocument.all.firstname.innerHTML = this.info[0][1];
          a.contentDocument.all.role.innerHTML = this.info[1][1];
          a.contentDocument.all.membership.innerHTML = this.info[2][1];
          a.contentDocument.all.phonenum.innerHTML = `P: ${this.info[3][1]}`;
          a.contentDocument.all.email.innerHTML = `E: ${this.info[4][1]}`;
          a.contentDocument.all.address_1.innerHTML = `A: ${this.info[5][1]},`;
          a.contentDocument.all.address_2.innerHTML = `    ${this.info[6][1]},`;
          a.contentDocument.all.address_3.innerHTML = `    ${this.info[7][1]},`;
          a.contentDocument.all.address_4.innerHTML = `    ${this.info[8][1]},`;

          resolve();
        };
      });
    };

    await svgLoad();

    this.master.setLoading(false);
  }

  ngOnInit(): void {
    this.master.setLoading(true);
    this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]);
  }

}
