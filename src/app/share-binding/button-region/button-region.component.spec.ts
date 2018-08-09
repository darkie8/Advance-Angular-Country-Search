import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegionComponent } from './button-region.component';

describe('ButtonRegionComponent', () => {
  let component: ButtonRegionComponent;
  let fixture: ComponentFixture<ButtonRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
