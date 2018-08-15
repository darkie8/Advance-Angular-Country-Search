import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareBindingModule } from '../share-binding/share-binding.module';
import { RegionFirstChnageComponent } from '../share-binding/region-first-chnage/region-first-chnage.component';
import { ButtonRegionComponent } from '../share-binding/button-region/button-region.component';
import { NgHttpLoaderModule } from '../../../node_modules/ng-http-loader';

import { CookieService } from 'ngx-cookie-service';
@NgModule({
  imports: [
    ShareBindingModule,
    CommonModule,
    FormsModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ CookieService ],
  declarations: [RegionsComponent]
})
export class RegionViewModule { }
