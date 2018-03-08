import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideEditComponent } from './slide-edit.component';

describe('SlideEditComponent', () => {
  let component: SlideEditComponent;
  let fixture: ComponentFixture<SlideEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
