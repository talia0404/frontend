import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdsDisplayComponent } from './apds-display.component';

describe('ApdsDisplayComponent', () => {
  let component: ApdsDisplayComponent;
  let fixture: ComponentFixture<ApdsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApdsDisplayComponent]
    });
    fixture = TestBed.createComponent(ApdsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
