import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import * as alertify from 'alertifyjs';

import { UserService } from '../../../../../services/user.service';
import { MasterService } from '../../../../../services/master.service';

interface Car {
  author;
  title;
  date;
  tags;
  category;
}

@Component({
  selector: 'app-page-admin-members-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class PageAdminMembersManagerComponent implements OnInit {
  public users = [];
  public userDetails = {};
  public cols: any[];
  constructor(private userService: UserService, private master: MasterService) { }

  public activateMember(userId): void {
    console.log(userId);
    
    this.userService.activateMember(userId).subscribe(n => {
      alertify.success('User status updated');
    });
  }

  ngOnInit(): void {
    this.master.setLoading(true);
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'package', header: 'Package' },
      { field: 'lifetime', header: 'Lifetime' },
      { field: 'payment', header: 'Payment made' },
      { field: 'status', header: 'Status' }
    ];

    this.userService.getAll().subscribe(u => {
      u.forEach(e => {
        this.users.push({
          id: e.membership.id,
          package: e.membership.plan,
          lifetime: (e.membership.lifetime) ? 'Yes' : 'No',
          payment: `RM${e.membership.paymentMade.toFixed(2)}`,
          status: e.membership.status
        });

        this.userDetails[e.membership.id] = e;
      });

      this.master.setLoading(false);
    });

    /* for (let x = 0; x < 30; x++) {
      this.users.push({
        id: `CA1914${x}`,
        package: `Student`,
        lifetime: 'No',
        payment: 'RM0.00',
        status: 'Active | Paid'
      });
    } */
  }

}
