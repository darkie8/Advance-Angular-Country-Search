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
  private fieldParam = 'flag;name;capital;languages;currencies;latlng;region;alpha2Code;';
  public finalProduct: any;
  public sortedProduct: any;
  public sortedAlphabet: any;
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  public sortedNames: any;
  history = [];
  constructor(private http: HttpClient, private router: Router) { }

  // region data api call
  public getRegiondata = [
    {
      'pix': 'assets/asia.jpg',
      'status': true,
      'name': 'asia',
      // tslint:disable-next-line:max-line-length
      'description': 'It is the largest continent by area (about a third of the world’s land is here), with the most people living on it. For every ten people alive today, six of them live in Asia.Asia is a continent of uniqueness, fascination and bewilderment all brought about by its cultures, economies, populations, landscapes, plants and animals.'
    },
    {
      'pix': 'assets/afro.jpg',
      'status': false,
      'name': 'africa',
      // tslint:disable-next-line:max-line-length
      'description': 'The African continent has the second largest population in the world, at about one billion people, Over one thousand languages are spoken by the people of Africa. '
    },
    {
      'pix': 'assets/americas.jpg',
      'status': false,
      'name': 'americas',
      // tslint:disable-next-line:max-line-length
      'description': 'The United States has the largest economy in the world. The nation\'s economy accounts for about 25% of the world\'s nominal GDP.'
    },
    {
      'pix': 'assets/euro.jpg',
      'status': false,
      'name': 'europe',
      // tslint:disable-next-line:max-line-length
      'description': 'With a land area of only 4,000,000 square miles, Europe is the second smallest continent in the world, just behind Australia.'

    },
    {
      'pix': 'assets/oceania.jpg',
      'status': false,
      'name': 'oceania',
      // tslint:disable-next-line:max-line-length
      'description': 'The region of Oceania and Australia includes the continent of Australia as well as many surrounding island countries.'
    }
  ];
  /**
   * counties
   */
  public counties(x, y) {
    return this.http.get(`${this.url}${y}/${x}?fields=${this.fieldParam}`, { responseType: 'json' });
  }
  /**
   * countryIndv
   */
  public countryIndv(x, y) {
    return this.http.get(`${this.url}${x}/${y}?fullText=true`);
  }

  public soting(x) {
    this.finalProduct = this.alphabet.map(main => {
      // tslint:disable-next-line:prefer-const
      return x.filter(obj => Object.is(obj.name.charAt(0), main));

    });
    console.log(this.finalProduct);
    this.sortedProduct = this.finalProduct.filter(obj => Object.values(obj).length !== 0);
    console.log(this.sortedProduct);
    this.sortedAlphabet = this.sortedProduct.map(obj => obj[0].name.charAt(0));
    // tslint:disable-next-line:max-line-length
    this.sortedNames = this.sortedProduct.map(obj1 => obj1.map(obj => obj.name.replace(/ /g, '_')));
    console.log(this.sortedNames);
    return { sortedProduct: this.sortedProduct, sortedAlphabet: this.sortedAlphabet, sortedNames: this.sortedNames };
  }
  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
        this.history.push(urlAfterRedirects);
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/';
  }
}
