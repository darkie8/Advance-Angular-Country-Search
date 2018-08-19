import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegionCountryCurrencyLanguageService } from '../../region-country-currency-language.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit, OnChanges {
  @Input() inputFilt: any;
  @Input() inputFilt1: any;
  @Input() type: any;
  @Output() outputFilt1: EventEmitter<any> = new EventEmitter<any>();
  @Output() outputFilt2: EventEmitter<any> = new EventEmitter<any>();
  @Output() outputFilt3: EventEmitter<any> = new EventEmitter<any>();
  array: any;
  array1: any;
  emitInput: any;
  emitInput1: any;
  emitInput2: any;
  constructor(
    private httpService: RegionCountryCurrencyLanguageService,
    private routeEnd: ActivatedRoute,
    private cookie: CookieService,
    private router: Router) { }

  ngOnInit() {
    this.array = this.inputFilt;
    this.array1 = this.inputFilt1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      const info = changes.inputFilt;
      this.array = info.currentValue;
    }, 10);
  }
  /**
   * emitting certain array which will change the conuntry infos
   */
  public change = (x) => {
    if (this.type === 'region') {
      const emitInput = this.inputFilt1.map(obj => obj.filter(obj1 => Object.is(obj1.region, x)));
      this.emitInput = emitInput.filter(obj => obj.length > 0);
    }
    if (this.type === 'languages') {
      const emitInput1 = this.inputFilt1.map(obj =>
        obj.filter(obj1 => (obj1.languages.find(obj2 => Object.is(obj2.name, x))) ? true : false));
      this.emitInput = emitInput1.filter(obj => obj.length > 0);
    }
    if (this.type === 'currencies') {
      const emitInput2 = this.inputFilt1.map(obj =>
        obj.filter(obj1 => (obj1.currencies.find(obj2 => Object.is(obj2.name, x))) ? true : false));
      this.emitInput = emitInput2.filter(obj => obj.length > 0);
    }
    this.emitInput1 = this.emitInput.map(obj => obj[0].name.charAt(0));
    this.emitInput2 = this.emitInput.map(obj1 => obj1.map(obj => obj.name.replace(/ /g, '_')));
    this.outputFilt1.emit({ sortedProduct: this.emitInput, sortedAlphabet: this.emitInput1, sortedNames: this.emitInput2 });
  }
}
