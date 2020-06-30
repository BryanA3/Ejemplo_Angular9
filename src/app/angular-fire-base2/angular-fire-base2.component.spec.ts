import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireBase2Component } from './angular-fire-base2.component';

describe('AngularFireBase2Component', () => {
  let component: AngularFireBase2Component;
  let fixture: ComponentFixture<AngularFireBase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFireBase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFireBase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
