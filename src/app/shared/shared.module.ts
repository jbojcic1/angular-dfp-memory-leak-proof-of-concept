import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VideoComponent } from './video/video.component';
import { ContentFeedComponent } from './content-feed/content-feed.component';
import { MatButtonModule } from '@angular/material';
import { FeedAdComponent } from './feed-ad/feed-ad.component';
import { DfpModule } from 'ngx-dfp';
import { LeaderboardAdComponent } from './leaderboard-ad/leaderboard-ad.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    DfpModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    ContentFeedComponent,
    LeaderboardAdComponent
  ],
  declarations: [VideoComponent, ContentFeedComponent, FeedAdComponent, LeaderboardAdComponent]
})
export class SharedModule {}
