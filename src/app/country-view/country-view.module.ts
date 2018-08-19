import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { NgHttpLoaderModule } from '../../../node_modules/ng-http-loader';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { ShareBindingModule } from '../share-binding/share-binding.module';
import { CountryCardsComponent } from '../share-binding/country-cards/country-cards.component';
import { FilterMenuComponent } from '../share-binding/filter-menu/filter-menu.component';
import { TagAlphabetComponent } from '../share-binding/tag-alphabet/tag-alphabet.component';

@NgModule({
  imports: [
    ShareBindingModule,
    CommonModule,
    NgHttpLoaderModule
  ],
  providers: [ CookieService ],
  declarations: [CountryComponent]
})
export class CountryViewModule { }
