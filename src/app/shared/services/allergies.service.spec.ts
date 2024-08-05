import { TestBed } from '@angular/core/testing';

import { AllergiesService } from './allergies.service';
import { HttpClientModule } from '@angular/common/http';

describe('AllergiesService', () => {
  let service: AllergiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AllergiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
