import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciCalculatorResultsComponent } from './fibonacci-calculator-results.component';

describe('FibonacciCalculatorResultsComponent', () => {
  let component: FibonacciCalculatorResultsComponent;
  let fixture: ComponentFixture<FibonacciCalculatorResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciCalculatorResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciCalculatorResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
