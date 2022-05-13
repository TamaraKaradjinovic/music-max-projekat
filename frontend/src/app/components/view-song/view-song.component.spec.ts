import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSongComponent } from './view-song.component';

describe('ViewSongComponent', () => {
  let component: ViewSongComponent;
  let fixture: ComponentFixture<ViewSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
