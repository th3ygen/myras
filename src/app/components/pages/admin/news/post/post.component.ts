import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

import { NewsService } from '../../../../../services/news.service';

import { SelectItem } from 'primeng/api';

import * as alertify from 'alertifyjs';
import * as shortid from 'shortid';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page-admin-news-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PageAdminNewsPostComponent implements OnInit {
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

  constructor(private news: NewsService, private http: HttpClient) {
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

  public dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
    } else {
        byteString = unescape(dataURI.split(',')[1]);
    }

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type: mimeString});
  }

  uploadNews() {

    const elements = this.content.split('<img ');

    const images = [];
    elements.forEach(element => {
      if (element.startsWith('src="data:image/')) {
        images.push({
          filename: `${shortid.generate()}.${element.split(';base64,')[0].split(':')[1].split('/')[1]}`,
          blob: this.dataURItoBlob(element.split('"')[1])
        });

        console.log(`${shortid.generate()}.${element.split(';base64,')[0].split(':')[1].split('/')[1]}`);
      }
    });

    const formData = new FormData();

    images.forEach(img => {
      formData.append('img', img.blob, img.filename);
    });
    this.http.post<any>('http://localhost:8080/storage/images/uploadmultiple', formData)
    .subscribe(res => {
      alertify.success('images uploaded');
    });

    /* console.log(images[0]); */


    /* const formData = new FormData();
    formData.append('img', img, img.name);
    formData.append('data', JSON.stringify(data)); */

    /* this.http.post */
    /* if (this.validate()) {
      this.news.postNews(
        this.header,
        this.brief,
        this.tags,
        this.img,
        this.content)
        .subscribe(data => {
          alertify.success('News post successful!');
        });
    } */
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