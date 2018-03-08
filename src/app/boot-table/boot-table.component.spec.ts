import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootTableComponent } from './boot-table.component';

describe('BootTableComponent', () => {
  let component: BootTableComponent;
  let fixture: ComponentFixture<BootTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
