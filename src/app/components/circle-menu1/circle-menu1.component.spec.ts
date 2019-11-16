import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleMenu1Component } from './circle-menu1.component';

describe('CircleMenu1Component', () => {
  let component: CircleMenu1Component;
  let fixture: ComponentFixture<CircleMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleMenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
