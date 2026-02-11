import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsGuideline } from './devops-guideline';

describe('DevopsGuideline', () => {
  let component: DevopsGuideline;
  let fixture: ComponentFixture<DevopsGuideline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevopsGuideline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevopsGuideline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
