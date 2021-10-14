import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdropdownComponent } from './appdropdown.component';

describe('AppdropdownComponent', () => {
  let component: AppdropdownComponent;
  let fixture: ComponentFixture<AppdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
