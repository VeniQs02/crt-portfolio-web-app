import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DottedText } from './dotted-text';

describe('DottedText', () => {
  let component: DottedText;
  let fixture: ComponentFixture<DottedText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DottedText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DottedText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
