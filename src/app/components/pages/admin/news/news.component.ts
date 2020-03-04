import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { NewsService } from '../../../../services/news.service';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class PageAdminNewsComponent implements OnInit {
  @ViewChild('header', {static: false}) header: any;
  @ViewChild('desc', {static: false}) desc: any;
  @ViewChild('tags', {static: false}) tags: any;
  @ViewChild('content', {static: false}) content: any;

  public img: File;

  public type: SelectItem[];
  public selectedType: string[] = [];

  constructor(private news: NewsService) {
    this.type = [];
    /* this.type.push({label: 'General', value: 'general'});
    this.type.push({label: 'Social', value: 'social'});
    this.type.push({label: 'Tech', value: 'tech'});
    this.type.push({label: 'Event', value: 'event'});
    this.type.push({label: 'Competition', value: 'competition'}); */
  }

  processFile(e: any) {
    const file: File = e.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (ev: any) => {
      this.img = file;
      
    });

    reader.readAsDataURL(file);

  }

  validate() {
    return true;
  }

  uploadNews() {
    if (this.validate()) {
      this.news.postNews(this.header.nativeElement.value,
        this.desc.nativeElement.value,
        this.tags.value,
        this.img,
        this.content.quill.root.innerHTML)
        .subscribe(data => {
          console.log(data);

        });
    }
  }

  ngOnInit() {
    /* this.news.getLatestNews(1).subscribe(data => {
      console.log(data);

    }); */
  }

}
