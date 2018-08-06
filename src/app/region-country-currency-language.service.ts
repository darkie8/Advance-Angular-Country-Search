import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/zip';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
import { filter } from '../../node_modules/rxjs/operators';

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class RegionCountryCurrencyLanguageService {
  private url = 'https://restcountries.eu/rest/v2/';
  constructor(private http: HttpClient, private router: Router) { }

  // region data api call
  public getRegiondata = [{
    'name': 'Europe',
    // tslint:disable-next-line:max-line-length
    'description': 'With a land area of only 4,000,000 square miles, Europe is the second smallest continent in the world, just behind Australia.'

  },
  {
    'name': 'Americas',
    // tslint:disable-next-line:max-line-length
    'description': 'The United States has the largest economy in the world. The nation\'s economy accounts for about 25% of the world\'s nominal GDP.'
  },
  {
    'name': 'Oceania'
    , 'description': 'The region of Oceania and Australia includes the continent of Australia as well as many surrounding island countries.'
  },
  {
    'name': 'Africa',
    // tslint:disable-next-line:max-line-length
    'description': 'The African continent has the second largest population in the world, at about one billion people, Over one thousand languages are spoken by the people of Africa. '
  },
  {
    'name': 'Asia',
// tslint:disable-next-line:max-line-length
'description': 'It is the largest continent by area (about a third of the world’s land is here), with the most people living on it. For every ten people alive today, six of them live in Asia.Asia is a continent of uniqueness, fascination and bewilderment all brought about by its cultures, economies, populations, landscapes, plants and animals.'
  }];

}
