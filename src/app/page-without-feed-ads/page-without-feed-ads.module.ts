import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWithoutFeedAdsComponent } from './page-without-feed-ads.component';
import { SharedModule } from '../shared/shared.module';
import { PageWithoutFeedAdsRoutingModule } from './page-without-feed-ads-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PageWithoutFeedAdsRoutingModule,
    SharedModule
  ],
  declarations: [PageWithoutFeedAdsComponent]
})
export class PageWithoutFeedAdsModule { }
