import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
import { Info } from '../../country-view/country/response';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.css']
})
export class CountryCardsComponent implements OnInit, OnChanges {
  filter = {
    filterType: '',
    by: '',
    name: ''
  };
  @Input() array: any;
  @Output() output1: EventEmitter<any> = new EventEmitter<any>();
  @Output() output2: EventEmitter<any> = new EventEmitter<any>();
  @Output() output3: EventEmitter<any> = new EventEmitter<any>();
  @Output() output4: EventEmitter<any> = new EventEmitter<any>();
  countryInfos: Info;
  languages: {}[];
  currencies: {}[];
  flat: any;
  region: any;
  zango: Info;
  constructor(
    private httpService: RegionCountryCurrencyLanguageService,
    private routeEnd: ActivatedRoute,
    private cookie: CookieService,
    private router: Router) { }
    
  ngOnInit() {
    this.countryInfos = this.array;
  }
  ngOnChanges(changes: SimpleChanges) {
    const info = changes.array;
    this.countryInfos = info.currentValue;
  }
  public Filter = (x: any, y: any) => {
    this.httpService.counties(x, y).subscribe(
      data => {
        console.log(data); // checking the data got by API call

        console.log(`${x},${y}`); // checking the url

        this.countryInfos = this.httpService.soting(data); // get info about countries in alphabetic order
        this.zango = this.countryInfos;
        // get an array flattened state of the coutry info
        const data1: any = data;
        this.flat = data1.reduce((acc, val) => acc.concat(val), []);

        // get region names to be used in filtering
        const region1 = this.flat.map(obj => obj.region);
        const set1 = new Set(region1);
        this.region = [...set1];
        this.output1.emit(this.region);
        // get language name to be used in filtering
        const languages = this.flat.map(obj => obj.languages);
        const languages1 = languages.reduce((acc, val) => acc.concat(val), []);
        const languagesName = languages1.map(obj => obj.name);
        const set = new Set(languagesName);
        this.languages = [...set];
        this.output2.emit(this.languages);
        // get currency name to be used in filtering
        const curr = this.flat.map(obj => obj.currencies);
        const curr1 = curr.reduce((acc, val) => acc.concat(val), []);
        const currName = curr1.map(obj => obj.name);
        const set3 = new Set(currName);
        this.currencies = [...set3];
        this.output3.emit(this.currencies);
        this.output4.emit(false);
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
    location.reload();
  }
}
