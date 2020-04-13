import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  public loading = false;

  constructor(private master: MasterService) { }

  ngOnInit(): void {
    this.master.loading.subscribe(flag => {
      this.loading = flag;
    });
  }

}
