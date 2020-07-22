import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';
import { MasterService } from '../../../../services/master.service';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-page-admin-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class PageAdminMembersComponent implements OnInit {
  public user: any;

  public members: any[];

  public tick: boolean;

  public itemsTick: boolean[] = [];

  public summary  = [
    {
      i: 'fas fa-users',
      label: 'Total members',
      value: 0,
    },
    {
      i: 'fas fa-user-check',
      label: 'Active members',
      value: 0,
    },
    {
      i: 'fas fa-user-plus',
      label: 'New members',
      value: 0,
    },
    {
      i: 'fas fa-user-minus',
      label: 'Disabled accounts',
      value: 0,
    },
  ];

  public tickAll() {
    this.itemsTick.forEach((t, x) => {
       this.itemsTick[x] = this.tick;
    });
  }

  public disableMember(id: string, flag: boolean) {
    this.master.setLoading(true);
    this.users.disable(id, (flag) ?  'true' : 'false').toPromise()
      .then(res => {
        this.master.setLoading(false);
        if (res.user) {
          alertify.success('User updated');

          setTimeout(() => {
            alertify.success('Refreshing the page');
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }, 2000);
        } else {
          alertify.error('Something went wrong :(');
        }
      }).catch(err => {
        console.error('error updating user', err);
      });
  }

  public deleteMember(id: string) {
    this.master.setLoading(true);

    this.users.remove(id).toPromise().then(res => {
      this.master.setLoading(false);
      if (res.message === 'user deleted') {
        alertify.success('Member account deleted');

        setTimeout(() => {
          alertify.success('Refreshing the page');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 2000);
      } else {
        alertify.error('Something went wrong :(');
      }
    }).catch(err => {
      this.master.setLoading(false);
      console.error('error deleting user', err);
    });
  }

  constructor( private auth: AuthService, private users: UserService, private master: MasterService ) {
    const minTicks = 10;

    for (let x = 0; x < minTicks; x++) {
      this.itemsTick[x] = false;
    }
  }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;

    if (this.user) {
      this.master.setLoading(true);
      this.users.getAll().toPromise().then(res => {
        this.members = res.users;
        for (const member of this.members) {
          if (member.dateCreated > Date.now() - (7 * 24 * 60 * 60 * 1000)) {
            this.summary[1].value++;
          }
          if (member.lastOnline > Date.now() - (7 * 24 * 60 * 60 * 1000)) {
            this.summary[2].value++;
          }
          this.summary[3].value += (!member.member.enabled) ? 1 : 0;

          const d = new Date(member.lastOnline).toString().split(' ');
          member.lastOnline = `${d[2]} ${d[1]} ${d[3]}`;
        }

        this.summary[0].value = this.members.length;

        this.master.setLoading(false);
      }).catch(err => {
        console.error('Error retrieving members', err);
        this.master.setLoading(false);
      });
    }
  }

}
