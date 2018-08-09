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
  public getRegiondata = [
    {
      'pix': 'assets/asia.jpg',
      'status': true,
      'name': 'Asia',
      // tslint:disable-next-line:max-line-length
      'description': 'It is the largest continent by area (about a third of the world’s land is here), with the most people living on it. For every ten people alive today, six of them live in Asia.Asia is a continent of uniqueness, fascination and bewilderment all brought about by its cultures, economies, populations, landscapes, plants and animals.'
    },
    {
      'pix': 'assets/afro.jpg',
      'status': false,
      'name': 'Africa',
      // tslint:disable-next-line:max-line-length
      'description': 'The African continent has the second largest population in the world, at about one billion people, Over one thousand languages are spoken by the people of Africa. '
    },
    {
      'pix': 'assets/americas.jpg',
      'status': false,
      'name': 'Americas',
      // tslint:disable-next-line:max-line-length
      'description': 'The United States has the largest economy in the world. The nation\'s economy accounts for about 25% of the world\'s nominal GDP.'
    },
    {
      'pix': 'assets/euro.jpg',
      'status': false,
      'name': 'Europe',
      // tslint:disable-next-line:max-line-length
      'description': 'With a land area of only 4,000,000 square miles, Europe is the second smallest continent in the world, just behind Australia.'

    },
    {
      'pix': 'assets/oceania.jpg',
      'status': false,
      'name': 'Oceania'
      // tslint:disable-next-line:max-line-length
      , 'description': 'The region of Oceania and Australia includes the continent of Australia as well as many surrounding island countries.'
    }
  ];
  /**
   * setItem in local storage
   */
  public setItem = (info: any) => {
    localStorage.setItem('name', info.name);
    localStorage.setItem('desc', info.description);
    localStorage.setItem('pix', info.pix);
    localStorage.setItem('status', info.status);
  }
  /**
   * getItem from local storage
   */
  public getItem() {
    localStorage.getItem('name');
    localStorage.getItem('desc');
    localStorage.getItem('pix');
    localStorage.getItem('status');
  }
}
