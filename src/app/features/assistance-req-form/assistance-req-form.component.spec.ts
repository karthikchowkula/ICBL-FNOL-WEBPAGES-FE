import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceReqFormComponent } from './assistance-req-form.component';

describe('AssistanceReqFormComponent', () => {
  let component: AssistanceReqFormComponent;
  let fixture: ComponentFixture<AssistanceReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceReqFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
