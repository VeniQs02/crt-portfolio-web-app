import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagButton } from './flag-button';

describe('FlagButton', () => {
  let component: FlagButton;
  let fixture: ComponentFixture<FlagButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
