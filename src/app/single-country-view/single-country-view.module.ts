import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCountryComponent } from './single-country/single-country.component';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ CookieService ],
  declarations: [SingleCountryComponent]
})
export class SingleCountryViewModule { }
