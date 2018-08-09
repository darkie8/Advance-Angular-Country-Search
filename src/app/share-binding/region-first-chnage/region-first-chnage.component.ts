import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'region-first-chnage',
  templateUrl: './region-first-chnage.component.html',
  styleUrls: ['./region-first-chnage.component.css']
})
export class RegionFirstChnageComponent implements OnInit, OnChanges {

  @Input() regName1: string;
  @Input() regDesc: string;
  @Input() regPix: any;
  public regionName: string;
  public regionDescription: any;
  public pix1: any;
  constructor() { }

  ngOnInit() {
    this.regionName = this.regName1;
    this.regionDescription = this.regDesc;
    this.regPix = this.pix1;
  }

  // if we need to change region
  ngOnChanges(changes: SimpleChanges): void {

    const name = changes.regName1;
    this.regionName = name.currentValue;
    const desc = changes.regDesc;
    this.regionDescription = desc.currentValue;
    const pix = changes.regPix;
    this.pix1 = pix.currentValue;
  }
}
