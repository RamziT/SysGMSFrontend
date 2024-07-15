import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualistesEditComponent } from './mutualistes-edit.component';

describe('MutualistesEditComponent', () => {
  let component: MutualistesEditComponent;
  let fixture: ComponentFixture<MutualistesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualistesEditComponent]
    });
    fixture = TestBed.createComponent(MutualistesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
