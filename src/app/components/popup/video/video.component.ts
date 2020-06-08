import { Component, OnInit, ViewChild, ElementRef, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

import { MasterService } from '../../../services/master.service';

import videojs from 'video.js';

@Component({
  selector: 'app-popup-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopupVideoComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true })
  public target: ElementRef;

  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    muted: boolean,
    sources: {
        src: string,
        type: string,
    }[],
  };

  public player: videojs.Player;

  close() {
    this.master.togglePopupVideo(false);
  }

  constructor( private master: MasterService, private elementRef: ElementRef ) { }

  ngOnInit(): void {
    this.options = {
      fluid: true,
      aspectRatio: '16:9',
      autoplay: true,
      muted: false,
      sources: [
        {
          src: '//vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }
      ]
    };
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
