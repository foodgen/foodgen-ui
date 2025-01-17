import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { IngredientsService } from './ingredients.service';

describe('IngredientsService', () => {
  let service: IngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(IngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
