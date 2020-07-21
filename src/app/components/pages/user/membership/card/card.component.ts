import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { MasterService } from '../../../../../services/master.service';
import { AuthService } from '../../../../../services/auth.service';


@Component({
  selector: 'app-page-user-membership-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PageUserMembershipCardComponent implements OnInit {
  @ViewChild('svg') svg: ElementRef;

  public user: any;

  public info = [
    ['firstname', ''],
    ['role', ''],
    ['membership', ''],
    ['mobile number', ''],
    ['email', ''],
    ['line 1', ''],
    ['line 2', ''],
    ['city', ''],
    ['postcode', ''],
    ['state', ''],
  ];

  constructor( private master: MasterService, private auth: AuthService ) { }

  updateCard() {
    const a = this.svg.nativeElement;
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
  }

  ngOnInit(): void {
    this.master.setLoading(true);

    this.user = this.auth.currentUserValue;

    this.auth.getUserInfo().toPromise().then(async (res) => {
      const user = res.user;

      if (user) {
        this.info = [
          ['fullname', user.details.fullname],
          ['role', (user.role === 'user') ? 'Member' : 'Admin' ],
          ['membership', user.member.plan],
          ['mobile number', user.details.phoneNum],
          ['email', user.email]
        ];

        let x = 1;
        for (const line of user.details.address.lines) {
          this.info.push([`line ${x}`, line]);
          x++;
        }

        this.info.push(['city', user.details.address.city]);
        this.info.push(['postcode', user.details.address.zip]);
        this.info.push(['state', user.details.address.state]);
        this.info.push(['country', user.details.address.country]);

        await this.updateCard();

        this.master.setLoading(false);
      }
    }).catch(err => { console.error(err); });
    /* this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]); */
  }

}
