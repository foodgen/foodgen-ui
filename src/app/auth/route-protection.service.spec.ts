import { TestBed } from '@angular/core/testing';
import { RouteProtectionService } from './route-protection.service';
import { HttpClientModule } from '@angular/common/http';

describe('RouteProtectionService', () => {
  let service: RouteProtectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(RouteProtectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
