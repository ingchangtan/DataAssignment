import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesTagPieComponent } from './images-tag-pie/images-tag-pie.component';
import { LikesTagBarComponent } from './likes-tag-bar/likes-tag-bar.component';
import { ImagesMonthLineComponent } from './images-month-line/images-month-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesTagPieComponent,
    LikesTagBarComponent,
    ImagesMonthLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
