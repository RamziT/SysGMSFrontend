import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesAChargeEditComponent } from './personnes-a-charge-edit.component';

describe('PersonnesAChargeEditComponent', () => {
  let component: PersonnesAChargeEditComponent;
  let fixture: ComponentFixture<PersonnesAChargeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnesAChargeEditComponent]
    });
    fixture = TestBed.createComponent(PersonnesAChargeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
