import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracklistRow } from './tracklist-row.component';

describe('DottedText', () => {
  let component: TracklistRow;
  let fixture: ComponentFixture<TracklistRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracklistRow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TracklistRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
