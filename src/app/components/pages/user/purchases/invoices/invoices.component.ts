import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/utils';

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
  public invoices: Invoice[] = [];
  public cols: any[];
  constructor() { }

  log(text): void {
    console.log(text);
  }

  ngOnInit(): void {
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

      return parseInt(filter) >= value;
    };

    for (let x = 0; x < 1; x++) {
      this.invoices.push({
        id: 'rndid123' + x,
        date: '13 March 2020',
        description: 'MyRAS Corporate membership fee',
        total: (10 * x)
      });

    }
  }

}
