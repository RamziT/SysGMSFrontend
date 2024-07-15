import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualistesCreateComponent } from './mutualistes-create.component';

describe('MutualistesCreateComponent', () => {
  let component: MutualistesCreateComponent;
  let fixture: ComponentFixture<MutualistesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualistesCreateComponent]
    });
    fixture = TestBed.createComponent(MutualistesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
