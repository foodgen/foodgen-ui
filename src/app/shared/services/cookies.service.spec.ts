import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookies.service';
import { HttpClientModule } from '@angular/common/http';

describe('CookiesService', () => {
  let service: CookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
