import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { NewsService } from '../../../../services/news.service';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-page-shared-news-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PageSharedNewsPostComponent implements OnInit {
  @ViewChild('header') header: any;
  @ViewChild('desc') desc: any;
  @ViewChild('tags') tags: any;
  @ViewChild('content') content: any;

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
