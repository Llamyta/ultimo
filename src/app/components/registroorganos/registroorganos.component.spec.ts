import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroorganosComponent } from './registroorganos.component';

describe('RegistroorganosComponent', () => {
  let component: RegistroorganosComponent;
  let fixture: ComponentFixture<RegistroorganosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroorganosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroorganosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
