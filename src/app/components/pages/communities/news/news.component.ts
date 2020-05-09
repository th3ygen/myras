import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-communities-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class PageCommunitiesNewsComponent implements OnInit {

  public filterItems: SelectItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
