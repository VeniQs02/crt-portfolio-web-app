import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spine } from './spine';

describe('Spine', () => {
  let component: Spine;
  let fixture: ComponentFixture<Spine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
