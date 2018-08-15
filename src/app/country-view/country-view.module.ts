import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { NgHttpLoaderModule } from '../../../node_modules/ng-http-loader';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    NgHttpLoaderModule
  ],
  providers: [ CookieService ],
  declarations: [CountryComponent]
})
export class CountryViewModule { }
