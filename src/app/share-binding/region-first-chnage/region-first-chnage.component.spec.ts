import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionFirstChnageComponent } from './region-first-chnage.component';

describe('RegionFirstChnageComponent', () => {
  let component: RegionFirstChnageComponent;
  let fixture: ComponentFixture<RegionFirstChnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionFirstChnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionFirstChnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
