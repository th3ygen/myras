import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pages-',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class PageAdminMembersNewComponent implements OnInit {
  public DD_TITLES: SelectItem[] = [
    {
      label: 'Mr.', value: 'Mr.'
    },
    {
      label: 'Ms.', value: 'Ms.'
    },
  ];
  public selectedTitle: string;

  public DD_PASS_OPT: SelectItem[] = [
    {
      label: 'Manual', value: false
    },
    {
      label: 'Generate', value: true
    },
  ];
  public selectedPassOpt: boolean;
  public generatedPass = 'g70x9080g7';
  public inputPass: string;


  constructor() { }

  ngOnInit(): void {
  }

}
