import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfoodformComponent } from './newfoodform.component';

describe('NewfoodformComponent', () => {
  let component: NewfoodformComponent;
  let fixture: ComponentFixture<NewfoodformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewfoodformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfoodformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
