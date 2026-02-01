import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSubmission } from './assignment-submission';

describe('AssignmentSubmission', () => {
  let component: AssignmentSubmission;
  let fixture: ComponentFixture<AssignmentSubmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentSubmission]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentSubmission);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
