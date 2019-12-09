import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasdonacionComponent } from './campaniasdonacion.component';

describe('CampaniasdonacionComponent', () => {
  let component: CampaniasdonacionComponent;
  let fixture: ComponentFixture<CampaniasdonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaniasdonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniasdonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
