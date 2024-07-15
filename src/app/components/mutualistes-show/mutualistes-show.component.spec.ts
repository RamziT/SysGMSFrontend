import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualistesShowComponent } from './mutualistes-show.component';

describe('MutualistesShowComponent', () => {
  let component: MutualistesShowComponent;
  let fixture: ComponentFixture<MutualistesShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualistesShowComponent]
    });
    fixture = TestBed.createComponent(MutualistesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
