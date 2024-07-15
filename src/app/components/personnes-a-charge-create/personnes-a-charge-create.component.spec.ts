import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesAChargeCreateComponent } from './personnes-a-charge-create.component';

describe('PersonnesAChargeCreateComponent', () => {
  let component: PersonnesAChargeCreateComponent;
  let fixture: ComponentFixture<PersonnesAChargeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnesAChargeCreateComponent]
    });
    fixture = TestBed.createComponent(PersonnesAChargeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
