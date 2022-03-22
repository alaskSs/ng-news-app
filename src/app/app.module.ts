import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopHeadlineComponent } from './compo/top-headline/top-headline.component'
import { TcnewsApiService } from './services/tcnews-api.service';
import { OnlyTechComponent } from './compo/only-tech/only-tech.component';
import { BusinessComponent } from './compo/business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    OnlyTechComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [TcnewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
