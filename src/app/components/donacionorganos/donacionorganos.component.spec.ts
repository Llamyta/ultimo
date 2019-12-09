import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionorganosComponent } from './donacionorganos.component';

describe('DonacionorganosComponent', () => {
  let component: DonacionorganosComponent;
  let fixture: ComponentFixture<DonacionorganosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionorganosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionorganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
