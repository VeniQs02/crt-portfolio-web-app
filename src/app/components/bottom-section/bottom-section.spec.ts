import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BottomSection} from './bottom-section';

describe('BottomSection', () => {
  let component: BottomSection;
  let fixture: ComponentFixture<BottomSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSection]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BottomSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
