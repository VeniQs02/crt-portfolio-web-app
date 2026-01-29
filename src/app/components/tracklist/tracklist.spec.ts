import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tracklist } from './tracklist';

describe('Tracklist', () => {
  let component: Tracklist;
  let fixture: ComponentFixture<Tracklist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tracklist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tracklist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
