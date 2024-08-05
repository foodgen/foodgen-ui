import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneComponent } from './step-one.component';
import { HttpClientModule } from '@angular/common/http';

describe('StepOneComponent', () => {
  let component: StepOneComponent;
  let fixture: ComponentFixture<StepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepOneComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
