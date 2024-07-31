import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMealsComponent } from './random-meals.component';

describe('RandomMealsComponent', () => {
  let component: RandomMealsComponent;
  let fixture: ComponentFixture<RandomMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomMealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
