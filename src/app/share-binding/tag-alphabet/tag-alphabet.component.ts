import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tag-alphabet',
  templateUrl: './tag-alphabet.component.html',
  styleUrls: ['./tag-alphabet.component.css']
})
export class TagAlphabetComponent implements OnInit, OnChanges {
@Input() input: any;
countryInfos: any;
  constructor() { }

  ngOnInit() {
    this.countryInfos = this.input;
  }
 ngOnChanges(changes: SimpleChanges) {
    const info = changes.input;
    this.countryInfos = info.currentValue;
 }
}
