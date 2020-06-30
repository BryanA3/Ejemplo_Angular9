import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoAComponent } from './contenido-a.component';

describe('ContenidoAComponent', () => {
  let component: ContenidoAComponent;
  let fixture: ComponentFixture<ContenidoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
