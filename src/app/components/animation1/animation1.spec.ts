import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animation1 } from './animation1';

describe('Animation1', () => {
  let component: Animation1;
  let fixture: ComponentFixture<Animation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Animation1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animation1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
