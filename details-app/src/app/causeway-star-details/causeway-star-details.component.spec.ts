import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausewayStarDetailsComponent } from './causeway-star-details.component';

describe('CausewayStarDetailsComponent', () => {
  let component: CausewayStarDetailsComponent;
  let fixture: ComponentFixture<CausewayStarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausewayStarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausewayStarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
