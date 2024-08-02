import { TestBed } from '@angular/core/testing';

import { RandomMealsService } from './random-meals.service';

describe('RandomMealsService', () => {
  let service: RandomMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
