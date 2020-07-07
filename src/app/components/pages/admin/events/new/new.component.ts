import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../../../../services/news.service';

import { SelectItem } from 'primeng/api';

import * as alertify from 'alertifyjs';
import * as shortid from 'shortid';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page-admin-events-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class PageAdminEventsNewComponent implements OnInit {
  public title: string;
  public description: string;
  public keywords: string;
  public content: string;
  public cluster: string;

  public img: File;

  public imgViewStyle = {};
  public imgViewBlurStyle = {};

  public type: SelectItem[];
  public clusters: SelectItem[];

  constructor(private news: NewsService, private http: HttpClient, private router: Router ) {
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

  clearFormInputs(): void {
    this.title = '';
    this.description = '';
    this.keywords = '';
    this.content = '';
    this.cluster = '';

    this.img = null;

    this.imgViewStyle = {
      'background-image': '',
    };
    this.imgViewBlurStyle = {
      'background-image': '',
    };
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
    return { err: false, message: 'ok' };
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
    const validate = this.validate();
    if (validate.err) {
      return alertify.success('Error posting new event: ' + validate.message);
    }

    const contentFile = new Blob([this.content], { type: 'text/plain' });

    const data = new FormData();

    data.set('title', this.title);
    data.set('description', this.description);
    data.set('cluster', this.cluster);
    data.set('keywords', this.keywords);
    data.set('organizer', 'MyRAS');
    data.set('startDate', Date.now().toString());
    data.set('endDate', Date.now().toString());
    data.set('datePublish', Date.now().toString());

    data.append('img', this.img);
    data.append('content', contentFile);

    this.http.post<any>('http://localhost:8080/api/events/post', data)
    .subscribe(res => {
      this.clearFormInputs();
      alertify.success('Event posted!');
    });
  }

  ngOnInit() {
    this.clusters = [
      {label: 'Select cluster', value : null},
      {label: 'Industry', value : 'industry'},
      {label: 'Academia', value : 'academia'},
      {label: 'Government', value : 'government'},
      {label: 'Public', value : 'public'},
    ];
  }

}
