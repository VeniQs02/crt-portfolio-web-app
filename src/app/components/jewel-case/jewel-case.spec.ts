import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelCase } from './jewel-case';

describe('JewelCase', () => {
  let component: JewelCase;
  let fixture: ComponentFixture<JewelCase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelCase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelCase);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
