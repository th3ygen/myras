import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-section-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class SectionFooterComponent implements OnInit {

  public navItems;

  constructor( private master: MasterService ) {
    this.navItems = master.navItems.slice();
    this.navItems.splice(0, 1);
  }

  ngOnInit() {
  }

}
