import { TestBed } from '@angular/core/testing';

import { SigninService } from './signin.service';
import { HttpClientModule } from '@angular/common/http';

describe('SigninService', () => {
  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(SigninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
