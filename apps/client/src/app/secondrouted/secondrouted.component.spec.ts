import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondroutedComponent } from './secondrouted.component';

describe('SecondroutedComponent', () => {
  let component: SecondroutedComponent;
  let fixture: ComponentFixture<SecondroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondroutedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
