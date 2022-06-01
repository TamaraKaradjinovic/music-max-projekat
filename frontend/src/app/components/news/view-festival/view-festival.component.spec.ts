import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFestivalComponent } from './view-festival.component';

describe('ViewFestivalComponent', () => {
  let component: ViewFestivalComponent;
  let fixture: ComponentFixture<ViewFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFestivalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
