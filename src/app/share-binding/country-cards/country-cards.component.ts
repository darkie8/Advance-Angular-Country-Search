import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'country-cards',
  templateUrl: './country-cards.component.html',
  styleUrls: ['./country-cards.component.css']
})
export class CountryCardsComponent implements OnInit, OnChanges {

  @Input() array: any;
  countryInfos: any;
  constructor(private routeEnd: ActivatedRoute) { }

  ngOnInit() {
    this.countryInfos = this.array;
  }
  ngOnChanges(changes: SimpleChanges) {
    const info = changes.array;
    this.countryInfos = info.currentValue;
   }
}
