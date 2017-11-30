import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-ad',
  templateUrl: './feed-ad.component.html',
  styleUrls: ['./feed-ad.component.scss']
})
export class FeedAdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  refreshed(event) {
    console.log(event);
  }
}
