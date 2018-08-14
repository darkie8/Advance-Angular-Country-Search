import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
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

  constructor(private routeEnd: ActivatedRoute,
    private httpService: RegionCountryCurrencyLanguageService,
    private router: Router) { }

  ngOnInit() {

    this.id1 = this.routeEnd.snapshot.paramMap.get('object1');
    this.id2 = (this.id1 === 'region') ? this.routeEnd.snapshot.paramMap.get('object2') : localStorage.getItem('by');
      this.Filter(this.id2, this.id1);
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
}
