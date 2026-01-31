import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review1Guidelines } from './review1-guidelines';

describe('Review1Guidelines', () => {
  let component: Review1Guidelines;
  let fixture: ComponentFixture<Review1Guidelines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Review1Guidelines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Review1Guidelines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
