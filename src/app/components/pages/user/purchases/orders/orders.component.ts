import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-user-purchase-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class PageUserPurchaseOrdersComponent implements OnInit {
  public ddType: SelectItem[] = [
    { label: 'Student', value: 'student' },
    { label: 'Regular', value: 'regular' },
    { label: 'Corporate', value: 'corporate' },
  ];

  public price = {
    corporate: 200,
    regular: 50,
    lCorporate: 1000,
    lRegular: 400,
  };

  public memberType = 'corporate';
  public qnty = 1;

  public total = 0;

  constructor() { }

  public updateTotal() {
    this.total = this.price[this.memberType] * this.qnty;
  }

  ngOnInit(): void {
    this.updateTotal();
  }

}
