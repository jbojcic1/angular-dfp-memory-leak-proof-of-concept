import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { OtherPageWithAdsModule } from './other-page-with-ads/other-page-with-ads.module';
import { PageWithoutFeedAdsModule } from './page-without-feed-ads/page-without-feed-ads.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    LayoutModule,
    HomeModule,
    OtherPageWithAdsModule,
    PageWithoutFeedAdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
