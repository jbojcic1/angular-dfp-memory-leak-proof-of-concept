import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { PageWithoutFeedAdsComponent } from './page-without-feed-ads.component';

const routes: Routes = [
  {
    path: 'page-without-feed-ads',
    component: MainLayoutComponent,
    children: [
      { path: '', component: PageWithoutFeedAdsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageWithoutFeedAdsRoutingModule { }
