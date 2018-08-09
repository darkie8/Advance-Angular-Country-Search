import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
import { of } from '../../../../node_modules/rxjs';
declare var $: any;
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public array: any;
  array1: any;
  public object: any;
  constructor(private region: RegionCountryCurrencyLanguageService) {
    this.array = this.region.getRegiondata;
   }

  ngOnInit() {
    this.object = this.array[0];
  }
  /**
   * to get region name and description
   */
  public infoAvailable(x) {
    const object = of (x);
     object.subscribe(data => {
      console.log(data);
      this.object = this.region.getRegiondata[data];
    });
  }
}
