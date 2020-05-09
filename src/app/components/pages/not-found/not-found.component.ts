import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor( private master: MasterService ) { }

  ngOnInit(): void {
  }

}
