import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryButtonComponent } from './new-story-button.component';

describe('NewStoryButtonComponent', () => {
  let component: NewStoryButtonComponent;
  let fixture: ComponentFixture<NewStoryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStoryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
