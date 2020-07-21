import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/utils';

import { MasterService } from '../../../../../services/master.service';
import { AuthService } from '../../../../../services/auth.service';

interface Invoice {
  id: string;
  date: string;
  description: string;
  total: number;
}

@Component({
  selector: 'app-page-user-purchase-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class PageUserPurchaseInvoicesComponent implements OnInit {
  public user: any;

  public invoices: Invoice[] = [];
  public cols: any[];

  public receipts = [];

  constructor( private master: MasterService, private auth: AuthService ) { }

  log(text): void {
    console.log(text);
  }

  viewReceipt(id: string) {
    const target = this.receipts.find(e => {
      return e.id === id;
    });
    window.open(target.url);
  }

  ngOnInit(): void {
    this.user = this.auth.currentUserValue;

    this.cols = [
      { field: 'id', header: 'Invoice ID'},
      { field: 'description', header: 'Description' },
      { field: 'date', header: 'Issue date' },
      { field: 'total', header: 'Amount' }
    ];

    FilterUtils['min amount'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      // tslint:disable-next-line: radix
      return parseInt(filter) >= value;
    };

    /* for (let x = 0; x < 1; x++) {
      this.invoices.push({
        id: 'rndid123' + x,
        date: '13 March 2020',
        description: 'MyRAS Corporate membership fee',
        total: (10 * x)
      });

    } */

    this.auth.getBills().toPromise().then(res => {
      const { due, paid } = res;

      console.log(paid);

      if (paid.length > 0) {
        for (const bill of paid) {
          this.invoices.push({
            id: bill.id,
            date: bill.paid_at,
            description: bill.description,
            total: bill.amount / 100
          });

          this.receipts.push({
            id: bill.id,
            url: bill.url
          });
        }
      }
    });
  }

}
