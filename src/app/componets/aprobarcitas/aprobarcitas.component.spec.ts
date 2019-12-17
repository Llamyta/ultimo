import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarcitasComponent } from './aprobarcitas.component';

describe('AprobarcitasComponent', () => {
  let component: AprobarcitasComponent;
  let fixture: ComponentFixture<AprobarcitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarcitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
