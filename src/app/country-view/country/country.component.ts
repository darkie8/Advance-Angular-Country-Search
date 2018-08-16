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

  constructor(private routeEnd: ActivatedRoute,
    private httpService: RegionCountryCurrencyLanguageService,
    private cookie: CookieService,
    private router: Router) {}

  ngOnInit() {
    this.previouUrl = this.httpService.getPreviousUrl();
    console.log(this.httpService.getHistory());
    this.id1 = this.routeEnd.snapshot.paramMap.get('object1');
    this.id2 = (this.id1 === 'region') ? this.routeEnd.snapshot.paramMap.get('object2') : localStorage.getItem('by');
    if (this.id1 === 'region') {
      this.cookie.set('region', this.id2);
    }
    this.Filter(this.id2, this.id1);
    // animate the go back button
    $('.backway').hover(function () {
      $('.backway').animate({ width: '200px' }, 500).text('Back to Previous Page');
    },
      function () {
        $('.backway').animate({ width: '46px' }, 500).text('❰');
      });
    // animate filter free button

    // animate the go back button
    $('.backway1').hover(function () {
      $('.backway1').animate({ width: '200px' }, 500).text('Back to Default state');
    },
      function () {
        // tslint:disable-next-line:max-line-length
        $('.backway1').animate({ width: '46px' }, 500).html('<span style="font-size: 30px !important;right: 5px;margin: 0px;height: 5px !important;position: relative;bottom: 13px" class="p-0 m-0">↺ </span>');
      });
  }
  /**
   * Filter countries as per need
   *  */
  public Filter = (x: any, y: any) => {
    this.httpService.counties(x, y).subscribe(
      data => {
        console.log(data);
        console.log(`${x},${y}`);
        this.countryInfos = this.httpService.soting(data);
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
}
