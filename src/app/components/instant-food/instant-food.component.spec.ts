import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantFoodComponent } from './instant-food.component';

describe('InstantFoodComponent', () => {
  let component: InstantFoodComponent;
  let fixture: ComponentFixture<InstantFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
