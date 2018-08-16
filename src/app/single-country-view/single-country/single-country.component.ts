import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
import { Observable } from '../../../../node_modules/rxjs';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  info: any;
  infoKeys: any;
  infoValues: any;
  translations: any;
  translationsKeys: string[];
  link: any;
  previouUrl: string;
  filter = {
    filterType: '',
    by: '',
    name: ''
  };

  constructor(private service: RegionCountryCurrencyLanguageService,
     private router: Router,
     private kukku: CookieService,
     private routeEnd: ActivatedRoute) { }

  ngOnInit() {
this.indvCountry('name', this.routeEnd.snapshot.paramMap.get('object1'));
 // setting cookie
 this.kukku.set('path2', `/name/${this.routeEnd.snapshot.paramMap.get('object1')}?fullText=true`);
 this.previouUrl = this.service.getPreviousUrl();
 console.log(this.service.getHistory());

  }

  /**
   * indvCountry
   */
  public indvCountry = (x: any, y: any) => {
    this.service.countryIndv(x, y).subscribe(
      data => {
        console.log(data);
        this.info = data[0];
        this.infoKeys = Object.keys(this.info);
        this.infoValues = Object.values(this.info);
        this.translations = Object.values(this.info.translations);
        this.translationsKeys = Object.keys(this.info.translations);
        this.link = `https://en.wikipedia.org/wiki/${this.info.name}`;
      },
      err => {
        console.log('error fetching');
      }
    );
  }

  /**
   * getBack
   */
  public getBack() {
    this.router.navigate([`${this.previouUrl}`]);
  }
  public filterNameStore = (x: any, y: any, z: any) => {
    localStorage.setItem('Filter_type', y);
    localStorage.setItem('by', x);
    localStorage.setItem('name', z);
    this.filter.filterType = localStorage.getItem('Filter_type');
    this.filter.by = localStorage.getItem('by');
    this.router.navigate(['/', this.filter.filterType.toLocaleLowerCase(), localStorage.getItem('name').replace(/ /gi, '_')]);
    console.log(this.filter);
    this.filter.name = localStorage.getItem('name');
    this.kukku.set('event', 'countryBack');
  }
}
