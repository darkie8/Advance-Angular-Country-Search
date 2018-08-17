import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  id: any;
  countryInfos: any;
  id1: any;
  id2: string;
  filter = {
    filterType: '',
    by: '',
    name: ''
  };
  id11: any;
  id21: string;
  previouUrl: string;
  languages: any;
  flat: any;
  region: any;
  currencies: any;
  regionFilter: any;
  sortAlph: any;
  constructor(private routeEnd: ActivatedRoute,
    private httpService: RegionCountryCurrencyLanguageService,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit() {
    this.cookie.set('filter?', 'false');
    // checking history and previous url
    this.previouUrl = this.httpService.getPreviousUrl();
    console.log(this.httpService.getHistory());

    // saving id1 and id2 to use in filter function
    this.id1 = this.routeEnd.snapshot.paramMap.get('object1');
    this.id2 = (this.id1 === 'region') ? this.routeEnd.snapshot.paramMap.get('object2') : localStorage.getItem('by');

    if (this.cookie.get('filter?') === 'false') {
      // setting cookie if the id1 == region
      if (this.id1 === 'region') {
        this.cookie.set('region', this.id2);
      }
      this.Filter(this.id2, this.id1); // calling the Filter()

    }

    /* $('.reg').click(() => {
       console.log('po');
       if (this.cookie.get('filter?') === 'true') {
         // tslint:disable-next-line:max-line-length
         this.regionFilterf(this.countryInfos.sortedProduct, this.countryInfos.sortedProduct, this.cookie.get('filterNow'), this.countryInfos.sortedAlphabet);
       }
     });*/

    // animate the go back button
    $('.backway').hover(function () {
      $('.backway').animate({ width: '200px' }, 500).text('Back to Previous Page');
    },
      function () {
        $('.backway').animate({ width: '46px' }, 500).text('❰');
      });

    // animate Default state  button
    $('.backway1').hover(function () {
      $('.backway1').animate({ width: '200px' }, 500).text('Back to Default state');
    },
      function () {
        // tslint:disable-next-line:max-line-length
        $('.backway1').animate({ width: '46px' }, 500).html('<span style="font-size: 30px !important;right: 5px;margin: 0px;height: 5px !important;position: relative;bottom: 13px" class="p-0 m-0">↺ </span>');
      });


  }
  /**
   * Filter countries as per need, declaring Filter(x,y) function
   *  */
  public Filter = (x: any, y: any) => {
    this.httpService.counties(x, y).subscribe(
      data => {
        console.log(data); // checking the data got by API call

        console.log(`${x},${y}`); // checking the url

        this.countryInfos = this.httpService.soting(data); // get info about countries in alphabetic order
        // get an array flattened state of the coutry info
        const data1: any = data;
        this.flat = data1.reduce((acc, val) => acc.concat(val), []);

        // get region names to be used in filtering
        const region1 = this.flat.map(obj => obj.region);
        const set1 = new Set(region1);
        this.region = [...set1];

        // get language name to be used in filtering
        const languages = this.flat.map(obj => obj.languages);
        const languages1 = languages.reduce((acc, val) => acc.concat(val), []);
        const languagesName = languages1.map(obj => obj.name);
        const set = new Set(languagesName);
        this.languages = [...set];

        // get currency name to be used in filtering
        const curr = this.flat.map(obj => obj.currencies);
        const curr1 = curr.reduce((acc, val) => acc.concat(val), []);
        const currName = curr1.map(obj => obj.name);
        const set3 = new Set(currName);
        this.currencies = [...set3];

        // checking through console
        console.log(this.region);
        console.log(this.flat);
        console.log(languages);
        console.log(languages1);
        console.log(this.languages);
      },
      err => {
        console.log(`${x},${y}`);
        console.log('error fetching request');
      }
    );
  }
  /**
   * filterNameStore
   */
  public filterNameStore = (x: any, y: any, z: any) => {
    localStorage.setItem('Filter_type', y);
    localStorage.setItem('by', x);
    localStorage.setItem('name', z);
    this.filter.filterType = localStorage.getItem('Filter_type');
    this.filter.by = localStorage.getItem('by');
    this.router.navigate(['/', this.filter.filterType.toLocaleLowerCase(), localStorage.getItem('name').replace(/ /gi, '_')]);
    console.log(this.filter);
    this.filter.name = localStorage.getItem('name');
    $('#A3').html(`<p class="mb-0 p-2">Filtered by :<br> ${this.filter.filterType} called ${this.filter.name} !<p>`);
    $('#A3').addClass('alert alert-warning');
  }
  /**
   * going to previousPage
   */
  public previousPage = () => {
    this.router.navigate([`/`]);
    const region = this.cookie.get('region');
    console.log(region);

  }
  /**
   * getBack to prev page
   */
  public getBack = () => {
    const region = this.cookie.get('region');
    console.log(region);

    this.router.navigate([`/region`, region]);
    this.Filter(region, 'region');
  }
  public filterev = () => {
    $('#filterev').animate({ left: '70vw' }, 500);
  }
  /**
   * backto
   */
  public backto = () => {
    $('#filterev').animate({ left: '100vw' }, 500);
  }
  /**
   * regionFilter
   */
  public regionFilterf = (x, y, z, k) => {
    x = y.map(obj =>
      obj.filter(obj1 => Object.is(obj1.region, z)));
    x = x.filter(obj => Object.values(obj).length !== 0);
    k = x.map(obj => obj[0].name.charAt(0));
    console.log(x);
    console.log(k);
  }
}
