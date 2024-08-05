import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoComponent } from './step-two.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTwoComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
