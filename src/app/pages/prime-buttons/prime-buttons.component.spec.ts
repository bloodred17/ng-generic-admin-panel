import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeButtonsComponent } from './prime-buttons.component';

describe('PrimeButtonsComponent', () => {
  let component: PrimeButtonsComponent;
  let fixture: ComponentFixture<PrimeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
