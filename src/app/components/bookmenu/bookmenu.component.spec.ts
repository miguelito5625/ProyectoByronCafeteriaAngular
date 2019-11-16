import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmenuComponent } from './bookmenu.component';

describe('BookmenuComponent', () => {
  let component: BookmenuComponent;
  let fixture: ComponentFixture<BookmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
