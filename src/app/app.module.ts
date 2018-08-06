import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// routing
import { RouterModule, Routes } from '@angular/router';

// http
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// http loader spinner
import { NgHttpLoaderModule } from 'ng-http-loader';

import { RegionsComponent } from './region-view/regions/regions.component';
import { RegionViewModule } from './region-view/region-view.module';
import { CountryViewModule } from './country-view/country-view.module';
import { SingleCountryViewModule } from './single-country-view/single-country-view.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegionViewModule,
    HttpClientModule,
    NgHttpLoaderModule,
    CountryViewModule,
    SingleCountryViewModule,
    RouterModule.forRoot([{ path: 'regions', component: RegionsComponent, pathMatch: 'full' },
    { path: '', component: RegionsComponent },
    { path: '*', component: RegionsComponent }], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
