import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { TrendComponent } from './trend/trend.component';
import { HomeComponent } from './home/home.component';
import { WeeklyNewsComponent } from './weekly-news/weekly-news.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { WeeklyNews2Component } from './weekly-news2/weekly-news2.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { RecentComponent } from './recent/recent.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { MapComponent } from './map/map.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    TrendComponent,
    HomeComponent,
    WeeklyNewsComponent,
    WhatsNewComponent,
    WeeklyNews2Component,
    YoutubeComponent,
    RecentComponent,
    PaginationComponent,
    FooterComponent,
    AboutComponent,
    CategoryComponent,
    LatestNewsComponent,
    MapComponent,
    GetintouchComponent,
    ContactComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
