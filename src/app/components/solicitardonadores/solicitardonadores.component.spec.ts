import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitardonadoresComponent } from './solicitardonadores.component';

describe('SolicitardonadoresComponent', () => {
  let component: SolicitardonadoresComponent;
  let fixture: ComponentFixture<SolicitardonadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitardonadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitardonadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
