import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { NgHttpLoaderModule } from '../../../node_modules/ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    NgHttpLoaderModule
  ],
  declarations: [CountryComponent]
})
export class CountryViewModule { }
