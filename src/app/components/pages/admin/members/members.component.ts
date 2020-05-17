import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-admin-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class PageAdminMembersComponent implements OnInit {

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
      label: 'Closed accounts',
      value: 0,
    },
  ];

  public tickAll() {
    this.itemsTick.forEach((t, x) => {
       this.itemsTick[x] = this.tick;
    });
    console.log(this.itemsTick);
  }

  constructor() {
    const minTicks = 10;

    for (let x = 0; x < minTicks; x++) {
      this.itemsTick[x] = false;
    }
  }

  ngOnInit(): void {
  }

}
