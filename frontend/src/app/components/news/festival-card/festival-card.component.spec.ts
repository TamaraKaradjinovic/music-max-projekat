import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalCardComponent } from './festival-card.component';

describe('FestivalCardComponent', () => {
  let component: FestivalCardComponent;
  let fixture: ComponentFixture<FestivalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
