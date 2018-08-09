import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsComponent } from './regions/regions.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng6-toastr';
import { ShareBindingModule } from '../share-binding/share-binding.module';
import { RegionFirstChnageComponent } from '../share-binding/region-first-chnage/region-first-chnage.component';
import { ButtonRegionComponent } from '../share-binding/button-region/button-region.component';
@NgModule({
  imports: [
    ShareBindingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [RegionsComponent]
})
export class RegionViewModule { }
