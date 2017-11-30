import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageWithAdsRoutingModule } from './other-page-with-ads-routing.module';
import { OtherPageWithAdsComponent } from './other-page-with-ads.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OtherPageWithAdsRoutingModule,
    SharedModule
  ],
  declarations: [OtherPageWithAdsComponent]
})
export class OtherPageWithAdsModule { }
