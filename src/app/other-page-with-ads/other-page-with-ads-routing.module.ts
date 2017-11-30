import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { OtherPageWithAdsComponent } from './other-page-with-ads.component';

const routes: Routes = [
  {
    path: 'other-page-with-ads',
    component: MainLayoutComponent,
    children: [
      { path: '', component: OtherPageWithAdsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPageWithAdsRoutingModule { }
