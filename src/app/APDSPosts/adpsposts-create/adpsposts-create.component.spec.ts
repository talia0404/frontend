import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpspostsCreateComponent } from './adpsposts-create.component';

describe('AdpspostsCreateComponent', () => {
  let component: AdpspostsCreateComponent;
  let fixture: ComponentFixture<AdpspostsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdpspostsCreateComponent]
    });
    fixture = TestBed.createComponent(AdpspostsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
