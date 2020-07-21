import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../../../services/master.service';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-page-user-membership-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class PageUserMembershipSubscriptionComponent implements OnInit {
  public user: any;
  
  public fullname = '';
  public id = '';
  public type = '';
  public lifetime = '';
  public phone = '';
  public email = '';
  public address = [];
  constructor( private master: MasterService, private auth: AuthService ) { }

  ngOnInit(): void {
    this.master.setLoading(false);
    this.user = this.auth.currentUserValue;

    this.auth.getUserInfo().toPromise().then(res => {
      const user = res.user;

      if (user) {
        this.fullname = user.details.fullname;
        this.id = user.member.id;
        this.type = user.member.plan;
        this.lifetime = (user.member.lifetime) ? 'YES' : 'NO';
        this.phone = user.details.phoneNum;
        this.email = user.email;
        this.address = user.details.address.lines;
        this.address.push(`${user.details.address.city} ${user.details.address.zip}`);
        this.address.push(user.details.address.state);
        this.address.push(user.details.address.country);
      }
    }).catch(err => {
      console.error(err);
    })
    /* this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]); */

  }

}
