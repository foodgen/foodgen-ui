import { TestBed } from '@angular/core/testing';

import { RandomMealsService } from './random-meals.service';
import { HttpClientModule } from '@angular/common/http';

describe('RandomMealsService', () => {
  let service: RandomMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(RandomMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
