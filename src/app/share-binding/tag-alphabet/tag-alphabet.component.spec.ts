import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAlphabetComponent } from './tag-alphabet.component';

describe('TagAlphabetComponent', () => {
  let component: TagAlphabetComponent;
  let fixture: ComponentFixture<TagAlphabetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAlphabetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
