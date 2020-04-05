import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeesperaComponent } from './listadeespera.component';

describe('ListadeesperaComponent', () => {
  let component: ListadeesperaComponent;
  let fixture: ComponentFixture<ListadeesperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadeesperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeesperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
