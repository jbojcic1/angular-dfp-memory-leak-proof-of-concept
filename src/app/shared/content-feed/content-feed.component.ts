import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'app-content-feed',
  templateUrl: './content-feed.component.html',
  styleUrls: ['./content-feed.component.scss']
})
export class ContentFeedComponent implements OnInit {

  videos: Video[] = [];

  private video: Video = {
    id: '1',
    name: 'Video title',
    description: 'This is some nice description.',
    image: 'https://img00.deviantart.net/d557/i/2011/330/1/6/i_hate_ads_by_nin10dohfanatic-d4heunj.png'
  };

  constructor() {
    this.addTenVideos();
    this.addTenVideos();
  }

  ngOnInit() {
  }

  addMore() {
    this.addTenVideos();
  }

  private addTenVideos() {
    for (let i = 0; i < 10; i++) {
      this.videos.push(cloneDeep(this.video));
    }
  }
}
