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
  public status: boolean;
  public index: any;
  public name: any;
  public bow: any;
  @Output() regionNameAp: EventEmitter<string> = new EventEmitter<string>();
  @Output() statOutput: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private button: RegionCountryCurrencyLanguageService) { }

  ngOnInit() {
    this.name = this.regName;
    this.status = this.stat;
  }
  ngOnChanges(changes: SimpleChanges) {

    const name1 = changes.regName;
    this.name = name1.currentValue;
    const stat = changes.stat;
    this.status = stat.currentValue;
  }

  /**
   * emittingClick
   */
  public emittingClick() {
    const array = this.button.getRegiondata.filter(obj => Object.is(this.name, obj.name));
    this.index = this.button.getRegiondata.indexOf(array[0]);

    // emitting index to use in the parent component to view the region datas
    this.regionNameAp.emit(this.index);
    this.statOutput.emit(true);

    // click to active button
    $(`.${this.name}`).addClass('active');
    this.bow = [...this.button.getRegiondata];

    const op = this.bow.filter(obj => obj.name !== this.name); // get which unclicked buttons
    for (const i of op) {
      $(`.${i.name}`).removeClass('active'); // unclicked button gets inactivated 
    }
  }
}
