import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesTagPieComponent } from './images-tag-pie/images-tag-pie.component';
import { LikesTagBarComponent } from './likes-tag-bar/likes-tag-bar.component';
import { ImagesMonthLineComponent } from './images-month-line/images-month-line.component';

const routes: Routes = [
  {path: "image-tag", component: ImagesTagPieComponent},
  {path: "likes-tag", component: LikesTagBarComponent},
  {path: "images-month", component: ImagesMonthLineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
