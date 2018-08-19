import { Component, OnInit } from '@angular/core';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
import { of } from '../../../../node_modules/rxjs';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public array: any;
  array1: any;
  status: boolean;
  public object: any;
  constructor(private region: RegionCountryCurrencyLanguageService,
    private cookie: CookieService,
    private router: Router) {
    this.array = this.region.getRegiondata;
  }

  ngOnInit() {
    this.object = this.array[0];
    this.status = false;
    this.array1 = this.array.map(obj => obj.status);
  }
  /**
   * to get region name and description
   */
  public infoAvailable(x) {
    this.object = this.region.getRegiondata[x];
  }
  /**
   * statConfirm
   */
  public statConfirm(x) {
    this.status = x;
    console.log(this.status);

  }
}
