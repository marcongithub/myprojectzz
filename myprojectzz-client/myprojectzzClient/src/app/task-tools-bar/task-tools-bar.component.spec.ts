import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskToolsBarComponent } from './task-tools-bar.component';

describe('TaskToolsBarComponent', () => {
  let component: TaskToolsBarComponent;
  let fixture: ComponentFixture<TaskToolsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskToolsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskToolsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
