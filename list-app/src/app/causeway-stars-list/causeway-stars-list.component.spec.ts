import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausewayStarsListComponent } from './causeway-stars-list.component';

describe('CausewayStarsListComponent', () => {
  let component: CausewayStarsListComponent;
  let fixture: ComponentFixture<CausewayStarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausewayStarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausewayStarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
