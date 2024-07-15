import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualistesComponent } from './mutualistes.component';

describe('MutualistesComponent', () => {
  let component: MutualistesComponent;
  let fixture: ComponentFixture<MutualistesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualistesComponent]
    });
    fixture = TestBed.createComponent(MutualistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
