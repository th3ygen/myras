import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../../services/master.service';

@Component({
  selector: 'app-page-about-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class PageAboutContactComponent implements OnInit {

  constructor( private master: MasterService ) { }

  ngOnInit(): void {
  }

}
