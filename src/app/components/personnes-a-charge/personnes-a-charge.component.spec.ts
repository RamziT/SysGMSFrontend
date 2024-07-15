import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesAChargeComponent } from './personnes-a-charge.component';

describe('PersonnesAChargeComponent', () => {
  let component: PersonnesAChargeComponent;
  let fixture: ComponentFixture<PersonnesAChargeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnesAChargeComponent]
    });
    fixture = TestBed.createComponent(PersonnesAChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
