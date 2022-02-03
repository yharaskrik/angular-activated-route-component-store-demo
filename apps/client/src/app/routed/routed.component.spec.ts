import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutedComponent } from './routed.component';

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
