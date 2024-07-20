import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSearchComponent } from './mini-search.component';

describe('MiniSearchComponent', () => {
  let component: MiniSearchComponent;
  let fixture: ComponentFixture<MiniSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
