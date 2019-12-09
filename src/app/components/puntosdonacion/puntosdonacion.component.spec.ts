import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosdonacionComponent } from './puntosdonacion.component';

describe('PuntosdonacionComponent', () => {
  let component: PuntosdonacionComponent;
  let fixture: ComponentFixture<PuntosdonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosdonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosdonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
