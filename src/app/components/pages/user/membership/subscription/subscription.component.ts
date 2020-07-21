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

  public accActive = false;

  public totalAmount = 0;
  public paid = false;

  public checkoutURL = '';
  constructor( private master: MasterService, private auth: AuthService ) { }

  checkout() {
    if (this.checkoutURL !== '') {
      window.open(this.checkoutURL);
    }
  }

  ngOnInit(): void {
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
    });

    this.master.setLoading(true);
    this.auth.getBills().toPromise().then(res => {
      const { due, paid } = res;
      if (due.length > 0) {
        const bill = due.find(e => {
          return e.description === 'MyRAS membership fee';
        });

        this.paid = false;
        this.accActive = false;
        this.totalAmount = bill.amount / 100;

        this.checkoutURL = bill.url;
      } else {
        this.paid = true;
        this.accActive = true;
        this.totalAmount = 0;
        this.checkoutURL = '';
      }

      this.master.setLoading(false);
    }).catch(err => {
      console.log(err.message);
      this.master.setLoading(false);
    });
    /* this.master.hideFooter(true);

    this.master.setBreadcrumbItems([
      {label: 'Membership information', url: '/user/membership'}
    ]); */

  }

}
