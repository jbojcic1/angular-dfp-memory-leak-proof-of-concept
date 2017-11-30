import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video: Video;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
