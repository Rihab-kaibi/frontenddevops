import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorList1Component } from './instructor-list1.component';

describe('InstructorList1Component', () => {
  let component: InstructorList1Component;
  let fixture: ComponentFixture<InstructorList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorList1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
