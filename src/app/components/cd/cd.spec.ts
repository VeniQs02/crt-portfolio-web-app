import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cd } from './cd';

describe('Cd', () => {
  let component: Cd;
  let fixture: ComponentFixture<Cd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
