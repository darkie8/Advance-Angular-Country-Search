import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button-region',
  templateUrl: './button-region.component.html',
  styleUrls: ['./button-region.component.css']
})
export class ButtonRegionComponent implements OnInit, OnChanges {
  @Input() regName: any;
  @Input() stat: boolean;
 // @Input() regionArray: any;
  public status: boolean;
  public index: any;
  public name: any;
  @Output() regionNameAp: EventEmitter<string> = new EventEmitter<string>();
  @Output() statOutput: EventEmitter<string> = new EventEmitter<string>();
  constructor(private button: RegionCountryCurrencyLanguageService) { }

  ngOnInit() {
    this.name = this.regName;
    this.status = this.stat;
    // this.array = this.regionArray;
  }
  ngOnChanges(changes: SimpleChanges) {

    const name1 = changes.regName;
    this.name = name1.currentValue;
    const stat = changes.stat;
    this.status = stat.currentValue;
   // const array = changes.regionArray;
   // this.array = array.currentValue;

  }

  /**
   * emittingClick
   */
  public emittingClick() {
    const array = this.button.getRegiondata.filter(obj => Object.is(this.name, obj.name));
    this.index = this.button.getRegiondata.indexOf(array[0]);
    this.regionNameAp.emit(this.index);
    // this.array = this.button.getRegiondata.forEach(obj => obj.status = (obj.name !== this.name) ? false : true);
    // if (this.array) { this.statOutput.emit(this.array); }
  }
}
