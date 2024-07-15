import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesAChargeShowComponent } from './personnes-a-charge-show.component';

describe('PersonnesAChargeShowComponent', () => {
  let component: PersonnesAChargeShowComponent;
  let fixture: ComponentFixture<PersonnesAChargeShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnesAChargeShowComponent]
    });
    fixture = TestBed.createComponent(PersonnesAChargeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
