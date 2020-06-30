import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoBComponent } from './contenido-b.component';

describe('ContenidoBComponent', () => {
  let component: ContenidoBComponent;
  let fixture: ComponentFixture<ContenidoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
