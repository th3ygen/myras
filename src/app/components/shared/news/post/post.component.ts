import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { NewsService } from '../../../../services/news.service';

import { SelectItem } from 'primeng/api';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-page-shared-news-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PageSharedNewsPostComponent implements OnInit {
  public header: string;
  public brief: string;
  public tags: string;
  public content: string;
  public cluster: string;

  public img: File;

  public imgViewStyle = {};
  public imgViewBlurStyle = {};

  public type: SelectItem[];
  public clusters: SelectItem[];

  constructor(private news: NewsService) {
    this.type = [];
  }

  dragOverHandler(e): void {
    e.preventDefault();
  }

  dropHandler(e): void {
    e.preventDefault();

    const items = Object.values(e.dataTransfer.items);

    let file: File;
    if (items) {
      items.forEach((item: DataTransferItem) => {
        if (item.kind === 'file') {
          file = item.getAsFile();
        }
      });
    }

    if (file) {
      this.processFile(file);
    }
  }

  processFile(file: File) {
    this.imgViewStyle = {
      'background-image': `url(${URL.createObjectURL(file)})`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'contain'
    };
    this.imgViewBlurStyle = {
      'background-image': `url(${URL.createObjectURL(file)})`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    };

    this.img = file;

  }

  validate() {
    return true;
  }

  uploadNews() {
    if (this.validate()) {
      this.news.postNews(
        this.header,
        this.brief,
        this.tags,
        this.img,
        this.content)
        .subscribe(data => {
          alertify.success('News post successful!');
        });
    }
  }

  ngOnInit() {
    this.clusters = [
      {label: 'Select cluster', value : null},
      {label: 'Industry', value : 'industry'},
      {label: 'Academian', value : 'academian'},
      {label: 'Government', value : 'government'},
      {label: 'Public', value : 'public'},
    ];
    /* this.news.getLatestNews(1).subscribe(data => {
      console.log(data);

    }); */
  }

}
