import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { HttpClientModule } from '@angular/common/http';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninComponent, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
