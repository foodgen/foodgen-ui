import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { HttpClientModule } from '@angular/common/http';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponent,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should choose a preference', () => {
    component.handleChoosePreference("test_preference")
    expect(component.choosedPreferences[0]).toBe("test_preference")
  });
  it('should remove a preference', () => {
    component.handleChoosePreference("test_preference1")
    component.handleChoosePreference("test_preference2")
    component.handleChoosePreference("test_preference1")
    expect(component.choosedPreferences.findIndex((value)=>value === "test_preference1")).toBe(-1);
    expect(component.choosedPreferences.length).toBe(1)
  });
  it('should choose a allergie', () => {
    component.handleChooseAllergie("test_allergies")
    expect(component.choosedAllergies[0]).toBe("test_allergies")
  });
  it('should remove a allergie', () => {
    component.handleChooseAllergie("test_allergies1")
    component.handleChooseAllergie("test_allergies2")
    component.handleChooseAllergie("test_allergies1")
    expect(component.choosedAllergies.findIndex((value)=>value === "test_allergies1")).toBe(-1);
  });
});
